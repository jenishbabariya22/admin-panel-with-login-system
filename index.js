const express = require('express');

const port = 9000;

const app = express();

app.set('view engine', 'ejs');

const cookieParser = require('cookie-parser');

app.use(express.urlencoded());

const db = require('./config/db');

app.use(cookieParser());

app.use('/', require('./routes/userRoutes'));


const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));



app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return false;
    }
    console.log(`Server Is Start on port :- ${port}`);
})