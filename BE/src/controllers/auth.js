
import { createUser } from "./user.js";
import { db } from "../../db.js";
import bcrypt from 'bcrypt'



export const signUp = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const saltRounds = 12
        bcrypt.hash(password, saltRounds, async function (err, hash) {

            const queryText = `
    INSERT INTO "users" (email, name, password)
    VALUES ($1, $2, $3) RETURNING *;`;

            const user = await db.query(queryText, [email, name, hash]);

            res.status(200).json({ success: true, user: user.rows[0] })
            // Store hash in your password DB.
        });




    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Database error" })
    }

}

export const signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const result = await db.query("SELECT * FROM users WHERE  email = $1", [email]
        );

        const user = result.rows[0]

        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                return res.json({ user,success: true})
            }

            return res.json({ msg: "User or password invalid" })
        });
    }

    catch (error) {
        console.log(error)
        res.status(500).json({ error: "Database Error" })
    }
}