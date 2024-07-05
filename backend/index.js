const express = require('express')
const app = express();
require('dotenv').config();


app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!!`);
})