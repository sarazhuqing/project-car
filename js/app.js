/**
 * Created by bjwsl-001 on 2017/5/17.
 */
const http=require('http');
const express=require('express');
 var app=express();
http.createServer(app).listen(8080);
app.get('/',(req,res)=>{

})