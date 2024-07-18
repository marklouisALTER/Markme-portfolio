const express = require('express')
const app = express();


require('dotenv').config();
const { getClient } = require('./database/get-client');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    const client = await getClient();
    try {
        await client.query('BEGIN'); // Start transaction
        const result = await client.query('INSERT INTO tbl_login (username, password) VALUES ($1, $2)', ['test', 'test']);
        await client.query('COMMIT'); // Commit transaction
        res.send('Data inserted');
    } catch (error) {
        await client.query('ROLLBACK'); // Rollback transaction on error
        console.error('Error executing query', error.stack);
        res.status(500).send('Internal Server Error');
    } finally {
        client.release();
    }
})

app.post('/api/v1/login', async (req, res) => {
    const client = await getClient();
    const { username, password, remember } = req.body;

    try {
        const result = await client.query('SELECT * FROM tbl_login WHERE username = $1 AND password = $2', [username, password]);
        if(result.rows.length > 0) {
            res.status(200).json({ message: 'Login successful' });
            return;
        }else{
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
    }catch(err){
        console.error('Error executing query', err.stack);
        res.status(500).send('Internal Server Error');
    }
})
app.get('/get', async (req, res) => {
    const client = await getClient();
    try {
        const result = await client.query('SELECT * FROM tbl_login');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/v1/register', async (req, res) => {
    const client = await getClient();
    const { username, password } = req.body;
    try{
        await client.query('INSERT INTO tbl_login (username, password) VALUES ($1, $2)', [username, password]);
        res.status(201).json({ message: 'User created successfully' });
        return;

    }catch(err){
        console.error('Error executing query', err.stack);
        res.status(500).send('Internal Server Error');
    }

})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!!`);
})