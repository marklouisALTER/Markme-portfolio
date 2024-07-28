const express = require('express');
const userRouter = express.Router();
const login = require('../controller/UserLogin');
const { generateAccessToken } = require('../utils/generateToken');

userRouter.post('/api/v1/login', login);

userRouter.post('/api/v1/refresh-token', async (req, res) => {
    const refreshToken = req.cookies.refresh_token;
    if(!refreshToken){
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }

    if(error.name === 'TokenExpiredError'){
        res.clearCookie('access_token');
        res.clearCookie('refresh_token');
        res.status(401).json({ title: 'Unauthorized', message: 'Refresh token expired please login again'});
        return;
    }

    try{
        const payload = await jwt.verify(req.cookies.refresh_token, process.env.JWT_SECRET);
        const newAccessToken = await generateAccessToken(payload.username, payload.role);

        res.status(200).json({ title: 'Authorized', message: 'Access token refreshed', newAccessToken: newAccessToken});

    }catch(err){
        console.error('Error verifying token', err.stack);
        res.status(401).json({title: 'Unauthorized', message: 'Unauthorized' });
    }

});

module.exports = userRouter;

// app.get('/get', async (req, res) => {
//     const client = await getClient();
//     try {
//         const result = await client.query('SELECT * FROM tbl_login');
//         res.json(result.rows);
//     } catch (error) {
//         console.error('Error executing query', error.stack);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.post('/api/v1/register', async (req, res) => {
//     const client = await getClient();
//     const { username, password } = req.body;
//     try{
//         await client.query('INSERT INTO tbl_login (username, password) VALUES ($1, $2)', [username, password]);
//         res.status(201).json({ message: 'User created successfully' });
//         return;

//     }catch(err){
//         console.error('Error executing query', err.stack);
//         res.status(500).send('Internal Server Error');
//     }

// })
