import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
    applicationTime: {type: Date, default: Date.now},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    job: {type: mongoose.Schema.Types.ObjectId, ref: 'JobModel'},
}, {collection: 'Application'})

export default applicationSchema