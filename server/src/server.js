const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const routes = require('./routes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(routes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running in port ${process.env.SERVER_PORT}`);
});
