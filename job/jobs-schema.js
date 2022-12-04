import mongoose from "mongoose";

const jobsSchema = mongoose.Schema({
    id: {type: String, required: true, unique: true},
    positionName: {type: String},
    positionType: {type: String, enum: ['Coop', 'Internship', 'Full Time']},
    numOpenings: Number,
    dateOfPosting: Date,
    deadlineToApply: Date,
    company: String,
    skillsReqd: Array,
    jobLength: Number

}, {collection: 'jobs'})

export default jobsSchema