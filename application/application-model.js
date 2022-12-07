import mongoose from "mongoose";
import applicationSchema from "./application-schema.js";

const applicationModel = mongoose.model(
    'ApplicationModel', applicationSchema)

export default applicationModel