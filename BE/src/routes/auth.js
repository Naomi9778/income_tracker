import express from "express"
import { signIn, signUp } from "../controllers/auth.js";


const auth = express.Router();

auth.route("/signup").post(signUp);
auth.route("/signin").post(signIn)



export { auth }
