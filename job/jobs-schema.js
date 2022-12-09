import mongoose from "mongoose";

const jobsSchema = mongoose.Schema({
    positionName: {type: String},
    positionType: {type: String, enum: ['Coop', 'Internship', 'Full Time']},
    numOpenings: Number,
    dateOfPosting: Date,
    deadlineToApply: Date,
    company: {
         type: String,
         ref: 'CompanyModel' },
    skillsReqd: Array,
    jobLength: Number,
    applicants: Array,
    pay: Number,
}, {collection: 'Jobs'})

export default jobsSchema