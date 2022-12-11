import jobsModel from "./jobs-model.js";
import mongoose from "mongoose"

export const createJob = (job) =>
    jobsModel.create(job)

export const findAllJobs = () =>
    jobsModel.find()

export const findJobById = (jid) => {
    return jobsModel.findById(jid)
}

export const findJobByCompanyId = (company) => {
    return jobsModel.find({company : company})
}

export const findJobUsingFilters = (query) => {
    return jobsModel.find(query)
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