import mongoose from "mongoose";
import jobsSchema from "./jobs-schema.js";

const jobsModel = mongoose.model(
    'JobsModel', jobsSchema)

export default jobsModel