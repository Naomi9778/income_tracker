import express, { query, response } from "express"
import bodyParser from "body-parser";
import cors from "cors"
import { db } from "./db.js"
import { user } from "./src/routes/user.js";


// const fs = require('node:fs');

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use("/user", user)

const port = 8000;


//install extension 

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

//Create Table

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