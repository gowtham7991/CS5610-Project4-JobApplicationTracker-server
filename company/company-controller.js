import * as dao from './company-dao.js'

const CompanyController = (app) => {

    const findAllCompanies = async (req, res) => {
        const companies = await dao.findAllCompanies()
        res.json(companies)
    }

    const createCompany = async (req, res) => {
        const company = req.body
        const existingCompany = await dao.findCompanyByName(company.name)
        if (existingCompany) {
            res.sendStatus(403)
            return
        }
        const newCompany = await dao.createCompany(company)
        res.json(newCompany)
    }

    const updateCompany   = async (req, res) => {
        const cid = req.params['cid']
        const companyUpdates = req.body
        const status = await dao.updateCompany(cid, companyUpdates)
        res.send(status)
    }

    const deleteCompany = async (req, res) => {
        const cid = req.params['cid']
        const status = await dao.deleteCompany(cid)
        res.send(status)
    }

    app.get('/companies', findAllCompanies)
    app.post('/companies', createCompany)
    app.put('/companies/:cid', updateCompany)
    app.delete('/companies/:cid', deleteCompany)
}

export default CompanyController