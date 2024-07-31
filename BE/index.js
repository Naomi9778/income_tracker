import express from "express"
import bodyParser from "body-parser";
import { fs } from "node:fs";
import { readFile } from "node:fs";


// const fs = require('node:fs');



const app = express()

app.use(bodyParser.json()) 

const port = 8000;


const data = [];



app.get('/read', (req, res) => {
  fs.readFile("./DATA.txt", 'utf8', (err,data)=> {
    res.end()
  }) 
})

app.post('/write', (req, res) => {
    const {body } = req ;
    fs.writeFile('./Data.txt', 'utf8')
    res.send("success!")
  })





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })