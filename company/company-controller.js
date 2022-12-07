import * as dao from './company-dao.js'

const CompanyController = (app) => {

    const findAllCompanies = async (req, res) => {
        const companies = await dao.findAllCompanies()
        res.json(companies)
    }

    const createCompany = async (req, res) => {
        const job = req.body
        const existingJob = await dao.findCompanyById(job.id)
        if (existingJob) {
            res.sendStatus(403)
            return
        }
        const newJob = await dao.createJob(job)
        res.json(newJob)
    }

    const updateJob   = async (req, res) => {
        const jid = req.params['jid']
        const jobUpdates = req.body
        const status = await dao.updateJob(jid, jobUpdates)
        res.send(status)
    }
    const deleteJob   = async (req, res) => {
        const jid = req.params['jid']
        const status = await dao.deleteJob(jid)
        res.send(status)
    }

    app.get('/jobs', findAllJobs)
    app.post('/jobs', createJob)
    app.put('/jobs/:jid', updateJob)
    app.delete('/jobs/:jid', deleteJob)
}

export default JobsController