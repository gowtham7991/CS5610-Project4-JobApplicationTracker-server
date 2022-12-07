import applicationModel from "./application-model.js";

export const findByJobId = (jobId) =>
    applicationModel.find({jobId})

export const findByEmail = (email) =>
    applicationModel.find({email})


