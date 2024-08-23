import express from "express"
import { createRecord, deleteRecord, getBArChartData, getOneRecord, getRecord, updateRecord } from "../controllers/record.js";

const record = express.Router();

record.route("/").get(getRecord).post(createRecord);
record.route("/:id").delete(deleteRecord).put(updateRecord)
record.route("/select/:id").get(getOneRecord)
// record.get("barchart", getBArChartData)


export { record }