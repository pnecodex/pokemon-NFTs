const express = require('express');
const {urlencoded,json} = require('body-parser');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes/index');
require('dotenv').config();
const connectDatabase = require('./config/config');

const app = express();
connectDatabase();


app.use(morgan('dev')); 
app.use(cors());
app.use(urlencoded({extended:false}));
app.use(json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'client/build')));
app.use(express.static(path.join(__dirname,'public')));

if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('client/build'));
    app.get("*",()=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}
routes(app);
app.get('/routes',(req,res)=>{
    res.send('request responses');
})
const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => console.log(`server app listening on port ${port}!`));