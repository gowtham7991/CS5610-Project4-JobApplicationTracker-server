import mongoose from "mongoose";
import assessmentSchema from "./assessment-schema.js";

const assessmentModel = mongoose.model(
    'AssessmentModel', assessmentSchema)

export default assessmentModel