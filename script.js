const express = require('express'); //Impost Express
//const Joi = require('joi');//Impost JOI
//const reg = require("express"); //Impost Joi
const app = express(); //Create express application on the app variable
app.use(express.json()); //Use json file

//Give date to the server
const customers= [
    {title: 'Sonal', id: 1},
    {title: 'Sachin', id: 2},
    {title: 'Adi', id: 3},
    {title: 'Adithya', id: 4},
    {title: 'Swapnil', id: 5},
]

//Read Request Handler
//Display the message when the url consists of '/'
app.get('/', (reg, res)=> {
    res.send('Welcome Sonal!');
});

//Display the list of customers when url consists of api customers
app.get('/api/customers', (req, res)=>{
    res.send(customers);
});

//Display list of specific customers when url consists of api customers
app.get('/api/customers/:id', (req, res)=> {
    const customer = customers.find (c=>c.id === parseInt(req.params.id));

    if (!customer) res.status(404).send('Oops...Cant find the customer!');
    res.send(customer);
});


//Port environment variable
const port = process.env.port || 8080;
app.listen(port, () => console.log ('Listening om port ${port}..'));
