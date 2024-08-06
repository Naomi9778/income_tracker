import express from "express"
import { createRecord, deleteRecord, getRecord, updateRecord } from "../controllers/record.js";

const record = express.Router();

record.route("/").get(getRecord).post(createRecord);
record.route("/:id").delete(deleteRecord).put(updateRecord)
// user.route("/record/select/:id").get(getOneUser)


export { record }