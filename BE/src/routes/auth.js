import express from "express"
import { signUp } from "../controllers/auth";


const user = express.Router();

user.route("/signup").post(signUp);



export { user }
