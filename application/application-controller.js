import * as dao from './application-dao.js'
import {createApplication, findByEmail} from './application-dao.js';

const ApplicationController = (app) => {

    const findAllApplications = async (req, res) => {
        const user = req.body
        const applications = await dao.findByEmail(user.email)
        res.json(applications)
    }

    const findAllJobApplications = async (req, res) => {
        const user = req.body
        const applications = await dao.findByEmail(user.jobId)
        res.json(applications)
    }

    const addApplication = async (req, res) => {
        const user = req.body
        const application = await dao.createApplication(user)
        res.json(application)
    }

    app.get('/student/getApplications', findAllApplications)
    app.get('/recruiter/getApplications', findAllJobApplications)
    app.post('/addApplication', addApplication)
}

export default ApplicationController