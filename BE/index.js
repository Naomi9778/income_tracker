import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import { db } from "./db.js"


// const fs = require('node:fs');



const app = express()

app.use(bodyParser.json())

const port = 8000;






app.get('/', async (req, res) => {
  const tableQueryText = `
  CREATE TABLE IF NOT EXISTS "users" (
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    password UNIQUE,
    avatar_img UNIQUE,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP,
    currency_type UNIQUE
  )`;
  try {
    await db.query(tableQueryText);
  }
  catch (error) {
    console.log(error)
  }
  res.send("Table Created Successfully")
})


app.get("/createUser", async (req, res) => {
  const queryText = `
  INSERT INTO "users" (name, email, password, avatar_img, createdAt, updatedAt, currency_type)
  VALUES ('bataa', 'nba1@gmail.com', '12345678', 'IMG', '2020', '24242', 'MNT');`;

  try {
    await db.query(queryText);
  }
  catch (error) {
    console.log(error)
  }
  res.send("user inserted Successfully")
})

app.get("/getUsers", async (req, res) => {
  const queryText = `
  SELECT * FROM  users`

  try {
    const result = await db.query(queryText);
    res.send(result.rows)
  }
  catch (error) {
    console.log(error)
  }
})

// app.post('/', (req, res) => {
//     const {body } = req ;
//     fs.writeFile('./Data.txt', 'utf8')
//     res.send("success!")
//   })





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})