const express = require("express");
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.get('/', (req, res)=>{
    res.send('Welcome to employee management apps');
})
app.get('/test', (req,res)=>{
res.status(200).send({
    message: 'api testing is working fine',
});
});
app.listen(3001,()=>{
    console.log(`server is running http://localhost:3001`)
});