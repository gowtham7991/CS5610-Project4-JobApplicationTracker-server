import mongoose from "mongoose";
import companySchema from "./company-schema.js";

const companyModel = mongoose.model(
    'CompanyModel', companySchema)

export default companyModel