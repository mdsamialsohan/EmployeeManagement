const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to employee management');
})
app.listen(3001,()=>{
    console.log(`server is running http://localhost:3001`)
});