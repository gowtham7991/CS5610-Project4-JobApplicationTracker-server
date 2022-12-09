import assessmentModel from "./assessment-model.js";

export const createAssessment = (assessment) =>
    assessmentModel.create(assessment)

export const findAllAssessment = () =>
    assessmentModel.find()

export const deleteAssessment = async (assessment) => {
    const status = await assessmentModel.deleteOne({assessment: assessment})
    return status
}

export const updateAssessment = async (assessment, assessmentUpdates) => {
    const status = assessmentModel.updateOne(
        {assessment: assessment},
        {$set: assessmentUpdates})
    return status
}