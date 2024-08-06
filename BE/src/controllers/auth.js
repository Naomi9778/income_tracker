import { db } from "../../db";
import { createUser} from "./user.js";



export const signUp = async (req, res) => {
try { 
    const user = await createUser(req,res)
    res.status(200).json({success: true, user: user})
}   
catch (error) {
    console.log(error)
    res.status(500).json({error: "Database error"})
}

}