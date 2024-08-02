import express, { query, response } from "express"
import bodyParser from "body-parser";
import cors from "cors"
import { db } from "./db.js"


// const fs = require('node:fs');

const app = express()

app.use(bodyParser.json())
app.use(cors())

const port = 8000;

app.get("/installExtension", async (req, res) => {
  const extensionQueryText = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  `;
 
  try {
    await db.query(extensionQueryText);
    res.send("Extension installed successfully");
  } catch (error) {
    console.error(error);
  }
});

app.get("/createTable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE IF NOT EXISTS "users" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE,
    name VARCHAR(50) NOT NULL,
    password TEXT,
    avatarImg TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    currencyType currency_type DEFAULT 'USD' NOT NULL
  );
  `;
 
  try {
    await db.query(tableQueryText);
    res.send("Table created successfully");
  } catch (error) {
    console.error(error);
  }
});


app.post("/createUser", async (req, res) => {
  const queryText = `
  INSERT INTO "users" (email, name, password, avatarImg, currencyType)
  VALUES ( 'nba1@gmail.com', 'bataa', '12345678', 'IMG', 'MNT');`;

  try {
    await db.query(queryText);
  }
  catch (error) {
    console.log(error)
  }
  res.send("user inserted Successfully")
})

app.post("/users/create", async (req, res) => {
  const { email, name, password, avatarImg, currencyType } = req.body;
 
  const queryText = `
  INSERT INTO "users" (email, name, password, avatarImg, currencyType)
  VALUES ($1, $2, $3, $4, $5) RETURNING *`;
 
  try {
    const result = await db.query(queryText, [
      email,
      name,
      password,
      avatarImg,
      currencyType
    ]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "DATABASE ERROR"})
  }
});

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

app.put("/users/:id", async (req,res) => {
  const { id } = req.params;
  const { name , email} = req.body;

  try {
    const result = await db.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", 
      [name, email, id]
    );
    if(result.rows.length === 0){
      return res.status(404).send("USER NOT FOUND")
    }
    else {
      res.json(result.rows[0])
    }
  }
  catch(error){
    console.log(error)
  }
})

app.delete("/users/:id", async (req,res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE from users WHERE id = $1 RETURNING *", 
      [id]
    );
    if(result.rows.length === 0){
      return res.status(404).send("USER NOT FOUND")
    }
    else {
      res.json(result.rows[0])
      res.send("USER DELETED SUCCESSFULLY")
    }
  }
  catch(error){
    console.log(error)
  }
})


// app.post('/', (req, res) => {
//     const {body } = req ;
//     fs.writeFile('./Data.txt', 'utf8')
//     res.send("success!")
//   })

//Record Table

app.get("/createRecordTable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE IF NOT EXISTS "record" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT,
    name TEXT NOT NULL,
    amount TEXT NOT NULL,
    transaction_type transaction_type DEFAULT 'EXP' NOT NULL,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id TEXT
    
  );
  `;
 
  try {
    await db.query(tableQueryText);
    res.send(" Record Table created successfully");
  } catch (error) {
    console.error(error);
  }
});











app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})