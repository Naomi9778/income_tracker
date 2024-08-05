import { db } from "../../db.js";
//Get User

export const getUser = async (req, res) => {
    const queryText = `
    SELECT * FROM  users`

    try {
        const result = await db.query(queryText);
        res.send(result.rows)
    }
    catch (error) {
        console.log(error)
    }
};
//Create user

export const createUser = async (req, res) => {
    const { email, name, password, avatarImg, currencyType } = req.body
    const queryText = `
    INSERT INTO "users" (email, name, password, avatarImg, currencyType)
    VALUES ($1, $2, $3, $4, $5) RETURNING *;`;

    try {
        await db.query(queryText, [email,name, password, avatarImg, currencyType]);
    }
    catch (error) {
        console.log(error)
    }
    res.send("user inserted Successfully")
};

// Update Users 

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, name, password, avatarImg, currencyType } = req.body;

    try {
        const result = await db.query("UPDATE users SET email = $1, name = $2, password = $3, avatarImg = $4, currencyType = $5 WHERE id = $6 RETURNING *",
            [email, name, password, avatarImg, currencyType, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("USER NOT FOUND")
        }
        else {
            res.json(result.rows[0])
        }
    }
    catch (error) {
        console.log(error)
    }
};



//Delete Users

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query("DELETE from users WHERE id = $1 RETURNING *",
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("USER NOT FOUND")
        }
        else {
            res.json(result.rows[0])
            res.send("USER DELETED SUCCESSFULLY")
        }
    }
    catch (error) {
        console.log(error)
    }
};

//Get one User

export const getOneUser = async (req,res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const result = await db.query("SELECT * FROM users WHERE  id = $1", [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("USER NOT FOUND")
        }
        else {
            res.json(result.rows[0])
        }
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
}


