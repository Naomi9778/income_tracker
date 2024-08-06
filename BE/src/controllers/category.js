import { db } from "../../db.js";

//Get category

export const getCategory = async (req, res) => {
    const queryText = `
    SELECT * FROM  category`

    try {
        const result = await db.query(queryText);
        res.send(result.rows)
    }
    catch (error) {
        console.log(error)
    }
};
//Create category

export const createGategory = async (req, res) => {
    const {name, description, category_img} = req.body
    const queryText = `
    INSERT INTO "category" (name, description, category_img)
    VALUES ($1, $2, $3) RETURNING *;`;

    try {
        await db.query(queryText, [name, description, category_img]);
    }
    catch (error) {
        console.log(error)
    }
    res.send("Category create Successfully")
};

// Update category

export const updateGategory = async (req, res) => {
    const { id } = req.params;
    const { name, description, category_img} = req.body;

    try {
        const result = await db.query("UPDATE users SET name = $1, description = $2, category_img = $3 WHERE id = $4 RETURNING *",
            [name, description, category_img, id]
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

export const deleteGategory = async (req, res) => {
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