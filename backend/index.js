const express = require('express')
const app = express();
require('dotenv').config();
const { getClient } = require('./database/get-client');


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

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!!`);
})