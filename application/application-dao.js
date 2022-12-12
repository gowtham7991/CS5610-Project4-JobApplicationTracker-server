import applicationModel from "./application-model.js";

export const findByJobId = (jobId) => {
    return applicationModel.find({jobId}).populate('job').populate('user')
}

export const findApplicationByUserId = (uid) => {
    return applicationModel.find({user : uid}).populate('job').populate('user')
}

export const findApplicationByJobId = (jid) => {
    return applicationModel.find({job : jid}).populate('job').populate('user')
}
export const findByEmail = (email) =>
    applicationModel.find({email}).populate('job').populate('user')

export const findAllApplications = () => {
    return applicationModel.find().populate('job').populate('user')
}

export const createApplication = (application) =>
    applicationModel.create(application)

export const withdrawApplication = async (id) => {
    const status = await applicationModel.deleteOne({ _id: id})
    return status
}
