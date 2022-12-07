import jobsModel from "./jobs-model.js";

export const createJob = (job) =>
    jobsModel.create(job)

export const findAllJobs = () =>
    jobsModel.find()

export const findJobById = (jid) =>
    jobsModel.findById(jid)

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