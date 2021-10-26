const express = require('express')
const app = express();
const cors = require('cors');

// Middlewares

app.use(express.json());

app.use(express.urlencoded({extended: false}));


app.use(cors());

// Routes

app.use(require('./routes/index'))

app.listen(4000);

console.log('Server on Port 4000')