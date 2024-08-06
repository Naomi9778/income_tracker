import express from "express"
import { createGategory, deleteGategory, getCategory, updateGategory } from "../controllers/category.js";

const category = express.Router();

category.route("/").get(getCategory).post(createGategory);
category.route("/:id").delete(deleteGategory).put(updateGategory)




export { category }