import * as dao from './application-dao.js'

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

    app.get('/student/getApplications', findAllApplications)
    app.post('/recruiter/getApplications', findAllJobApplications)
}

export default ApplicationController