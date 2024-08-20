import express, { query, response } from "express"
import bodyParser from "body-parser";
import cors from "cors"
import { db } from "./db.js"
import { user } from "./src/routes/user.js";
import { record } from "./src/routes/record.js";
import { category } from "./src/routes/category.js";
import { auth } from "./src/routes/auth.js";


// const fs = require('node:fs');

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use("/user", user)
app.use("/record", record)
app.use("/category", category)
app.use("/auth", auth)

const PORT = process.env.PORT;


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
    user_id uuid NOT NULL,
    category_id uuid NOT NULL,
    FOREIGN KEY (user_id)
    references users(id),
    FOREIGN KEY (category_id)
    references category(id),
    name TEXT,
    amount REAL NOT NULL,
    transaction_type transaction_type DEFAULT 'EXP' NOT NULL,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
    
  );
  `;

  try {
    await db.query(tableQueryText);
    res.send(" Record Table created successfully");
  } catch (error) {
    console.error(error);
  }
});


// Category Table 

app.get("/createCategoryTable", async (req, res) => {
  const tableQueryText = `
  CREATE TABLE IF NOT EXISTS "category" (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100),
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_image TEXT
    
  );
  `;

  try {
    await db.query(tableQueryText);
    res.send(" Category table created successfully");
  } catch (error) {
    console.error(error);
  }
});







app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})