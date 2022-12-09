import mongoose from "mongoose";

const assessmentSchema = mongoose.Schema({
    link: {type: String},
    platform: {type: String},
    duration: {type: Number},
    numQuestions: {type: Number},
}, {collection: 'Company'})

export default assessmentSchema