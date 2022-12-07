import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    companyID: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    logo: {type: String},
    websiteURL: {type: String},
    twitterLink: {type: String},
    fbLink: {type: String},
    location: {type: String},
    overview: {type: String},
    jobsPosted: Array
}, {collection: 'Company'})

export default companySchema