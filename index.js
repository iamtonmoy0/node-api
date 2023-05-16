const express = require('express');
const phone = require('./public/phone.json');
const app= express();
const port= 3000;



app.get('/',(req,res)=>{
	res.send('hello world')
})
//get all
app.get('/phone' ,(req,res)=>{
	res.send(phone)
})
//get by id
app.get('/phone/:id',(req,res)=>{
	const id =parseInt(req.params.id);
	const phonedata=phone.find(phones=>phones.id === id) || {};
	 res.send(phonedata)
              
})

//listening port
app.listen(port)