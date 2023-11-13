const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let groceries = [
    { id:1, name: 'Apple', price: 1},
    { id:2, name: 'Orange', price: 2},
    { id:3, name: 'Kiwi', price: 1.5},
    { id:4, name: 'Banana', price:0.5}
];

app.get('/groceries', (req,res) =>{
res.json(groceries);
});

app.listen(3002, ()=>{
console.log('Server running on 3002');
});