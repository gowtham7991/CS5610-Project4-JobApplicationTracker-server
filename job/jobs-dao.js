import jobsModel from "./jobs-model.js";
import mongoose from "mongoose"

export const createJob = (job) =>
    jobsModel.create(job)

export const findAllJobs = () =>
    jobsModel.find()

export const findJobById = (jid) =>
    jobsModel.findById(jid)

export const findJobByCompanyId = (company) => {
    const cId = new mongoose.Types.ObjectId(company);
    // mongoose.Types.ObjectId("6390e9ea55fdee251cfc89c8")
    console.log(cId);
    return jobsModel.find({company : "6390e9ea55fdee251cfc89c8"})
}

export const deleteJob = async (jid) => {
    const status = await jobsModel.deleteOne({jobId: jid})
    return status
}
export const updateJob = async (jid, jobUpdates) => {
    const status = jobsModel.updateOne(
        {jobId: jid},
        {$set: jobUpdates})
    return status
}