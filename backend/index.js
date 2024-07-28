const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const userRouter = require('./src/routes/User');

require('dotenv').config();
const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!!`);
})