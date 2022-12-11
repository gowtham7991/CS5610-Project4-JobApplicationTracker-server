import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    applicationTime: {type: Date, default: Date.now},
    user: {type: String, ref: 'UsersModel'},
    job: {type: String, ref: 'JobsModel'},
}, {collection: 'Application'})

export default applicationSchema