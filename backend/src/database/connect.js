const { Client } = require('pg');

require('dotenv').config();

    const client = new Client({
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
    });

    client.connect();

    client.query('Select * from tbl_login', (err, res) => {
        if(!err){
            console.log(res.rows)
        }else{
            console.log(err.message)
        }
        client.end;
    })