import companyModel from "./company-model.js";

export const createCompany = (company) =>
    companyModel.create(company)

export const findAllCompanies = () =>
    companyModel.find()

export const findCompanyById = (cid) =>
    companyModel.findById(cid)

export const deleteCompany = async (cid) => {
    const status = await companyModel.deleteOne({companyId: cid})
    return status
}
export const updateCompany = async (cid, companyUpdates) => {
    const status = companyModel.updateOne(
        {companyId: cid},
        {$set: companyUpdates})
    return status
}