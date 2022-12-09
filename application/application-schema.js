import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    applicationTime: {type: Date, default: Date.now},
    user: {type: String, ref: 'UserModel'},
    job: {type: String, ref: 'JobModel'},
}, {collection: 'Application'})

export default applicationSchema