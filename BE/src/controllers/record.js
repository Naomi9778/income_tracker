import { db } from "../../db.js";

//new dashboard Chart

export const getBArChartData = async (req,res) => {
    try {
        const result = await db.query(queryText);
        console.log(result.rows)
    } catch (error) {
        console.log(error)
    }

}

//Get Record

export const getRecord = async (req, res) => {
    const queryText = `
    SELECT * FROM  record`

    try {
        const result = await db.query(queryText);
        return res.send(result.rows)
    }
    catch (error) {
        return res.send(error)
    }
};
//Create record

export const createRecord = async (req, res) => {
    const { name, amount, transaction_type, description, user_id, category_id } = req.body
    const queryText = `
    INSERT INTO "record" (name, amount, transaction_type, description, user_id, category_id)
    VALUES ($1, $2, $3, $4, $5,$6) RETURNING *`;

    try {
        await db.query(queryText, [name, amount, transaction_type, description, user_id, category_id]);
        res.send("record inserted Successfully")
    }
    catch (error) {
        return res.send(error)
    }
    
};

// Update Record

export const updateRecord = async (req, res) => {
    const { id } = req.params;
    const {name, amount, transaction_type, description} = req.body;

    try {
        const result = await db.query("UPDATE record SET name = $1, amount = $2, transaction_type = $3, description = $4 WHERE id = $6 RETURNING *",
            [name, amount, transaction_type, description, id]
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



//Delete record

export const deleteRecord = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query("DELETE from record WHERE id = $1 RETURNING *",
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).send("USER NOT FOUND")
        }
        else {
            res.json(result.rows[0])
            res.send("RECORD DELETED SUCCESSFULLY")
        }
    }
    catch (error) {
        return res.send(error)
    }
};

//Get one Record

export const getOneRecord = async (req,res) => {
    const { id, name } = req.params;
    try {
        const result = await db.query("SELECT * FROM record WHERE  id = 1$, name = 2$ RETURNING *", 
            [id, name]
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
}


//Filter query 
