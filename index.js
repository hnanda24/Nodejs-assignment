const express = require("express");

const app = express();

app.use(express.json());

const newTodos = [];

app.post('/add',(req,res) => {
    const {tittle,description} = req.body;

    newTodos.push({id: newTodos.length+1, tittle, description});

    res.status(200).json("Data is sent");
})

app.get('/display',(req,res) => {
    res.json({newTodos});
})

app.delete('/delete',(req,res) => {
    const {id} = req.body;
    for(let i=0;i<newTodos.length;i++)
    {
        if(newTodos[i].id == id)
        {
            newTodos.splice(i,1)
        }
    }
})

app.delete('/delete',(req,res) => {
    const {tittle,description} = req.body;
    const {id} = req.body;
    for(let i=0;i<newTodos.length;i++)
    {
        if(newTodos[i].id == id)
        {
            newTodos.push({id: newTodos.length+1, tittle, description});
        }
    }
    res.status(200).send("Data Updated");
})

app.listen(3000, () => {
    console.log("Server Started");
})