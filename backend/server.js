//import express from 'express';
const express = require("express");

const app = express();

app.get('/', (req,res)=>{
    res.send('Server is ready');
})

app.listen(5000,()=>{
    console.log('server at 5000');
});