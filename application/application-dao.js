import applicationModel from "./application-model.js";

export const findByJobId = (jobId) =>
    applicationModel.find({jobId})

export const findApplicationByUserId = (uid) => {
    return applicationModel.find({user : uid})
}

export const findApplicationByJobId = (jid) => {
    return applicationModel.find({job : jid})
}
export const findByEmail = (email) =>
    applicationModel.find({email})

export const createApplication = (application) =>
    applicationModel.create(application)
