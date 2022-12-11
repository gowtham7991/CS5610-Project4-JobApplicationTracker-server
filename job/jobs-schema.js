import mongoose from "mongoose";

const jobsSchema = mongoose.Schema({
    positionName: {type: String},
    description: String,
    term: String,
    positionType: {type: String, enum: ['Coop', 'Internship', 'FullTime']},
    numOpenings: Number,
    location: String,
    paymentType: String,
    dateOfPosting: {type: Date, default: Date.now},
    deadlineToApply: String,
    company: String,
    skillsReqd: Array,
    startDate: String,
    jobLength: Number,
    applicants: Array,
    pay: Number
}, {collection: 'Jobs'})

export default jobsSchema
