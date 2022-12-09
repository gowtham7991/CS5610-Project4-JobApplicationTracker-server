import mongoose from "mongoose";

const jobsSchema = mongoose.Schema({
    positionName: {type: String},
    description: String,
    term: String,
    positionType: {type: String, enum: ['Coop', 'Internship', 'Full Time']},
    numOpenings: Number,
    location: String,
    paymentType: String,
    dateOfPosting: Date,
    deadlineToApply: Date,
    company: {
         type: String,
         ref: 'CompanyModel' },
    skillsReqd: Array,
    startDate: Date,
    jobLength: Number,
    pay: Number,
    applicationDeadline: Date
}, {collection: 'Jobs'})

export default jobsSchema