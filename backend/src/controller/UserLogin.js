const { getClient } = require('../database/get-client');
const { generateAccessToken, generateRefreshToken } = require('../utils/generateToken');


const login = async (req, res) => {
    const client = await getClient();
    const { username, password, remember } = req.body;

    try {
        const result = await client.query('SELECT * FROM tbl_login WHERE username = $1 AND password = $2', [username, password]);
        if(result.rows.length > 0) {
            
            const accessToken = generateAccessToken(username, result.rows[0].role);
            const refreshToken = generateRefreshToken(password, result.rows[0].role);
            
            res.cookie('refresh_token', refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                expires: new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000)
            })

            res.status(200).json({ message: 'Login successful', accessToken: accessToken });
            return;
        }else{
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }
    }catch(err){
        console.error('Error executing query', err.stack);
        res.status(500).send('Internal Server Error');
    }
};
module.exports = login;