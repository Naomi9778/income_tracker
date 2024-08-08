import { db } from "../../db.js";

//Get category

export const getCategory = async (req, res) => {
    const queryText = `
    SELECT * FROM  category`

    try {
        const result = await db.query(queryText);
        return res.send(result.rows)
    }
    catch (error) {
        return res.send(error)
    }
};
//Create category

export const createGategory = async (req, res) => {
    const {name, description, category_img} = req.body
    const queryText = `
    INSERT INTO "category" (name, description, category_image)
    VALUES ($1, $2, $3) RETURNING *;`;

    try {
        await db.query(queryText, [name, description, category_img]);
        return res.send("Category create Successfully")
    }
    catch (error) {
        return res.send(error)
    }
    
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
        return res.send(error)
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
            return res.send("USER DELETED SUCCESSFULLY")
        }
    }
    catch (error) {
        return res.send(error)
    }
};