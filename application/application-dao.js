import applicationModel from "./application-model.js";

export const findByJobId = (jobId) => {
    return applicationModel.find({jobId})
}

export const findApplicationByUserId = (uid) => {
    return applicationModel.find({user : uid})
}

export const findApplicationByJobId = (jid) => {
    return applicationModel.find({job : jid}).populate('user')
}
export const findByEmail = (email) =>
    applicationModel.find({email})

export const findAllApplications = () => {
    return applicationModel.find().populate('job')
}

export const createApplication = (application) =>
    applicationModel.create(application)

export const withdrawApplication = async (id) => {
    const status = await applicationModel.deleteOne({ _id: id})
    return status
}
