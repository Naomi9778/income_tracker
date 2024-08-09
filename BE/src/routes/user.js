import express from "express"
import { createUser, deleteUser, getOneUser, getUser, updateUser } from "../controllers/user.js";

const user = express.Router();

user.route("/").get(getUser).post(createUser);
user.route("/:id").delete(deleteUser).put(updateUser)
user.route("/select").get(getOneUser)


export { user }

