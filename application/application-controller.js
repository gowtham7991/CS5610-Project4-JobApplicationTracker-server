import * as dao from './application-dao.js'
import {createApplication, findByEmail} from './application-dao.js';
import * as jobsDao from '../job/jobs-dao.js'

const ApplicationController = (app) => {

    const findAllApplications = async (req, res) => {
        const applications = await dao.findAllApplications()
        res.json(applications)
    }

    const findAllJobApplications = async (req, res) => {
        const user = req.body
        const applications = await dao.findByEmail(user.jobId)
        res.json(applications)
    }

    const findApplicationByUserId = async (req, res) => {
        const uid = req.params['uid']
        const userApplications = await dao.findApplicationByUserId(uid)
        res.json(userApplications)
    }

    const findApplicationByJobId = async (req, res) => {
        const jid = req.params['jid']
        const userApplications = await dao.findApplicationByJobId(jid)
        res.json(userApplications)
    }

    const addApplication = async (req, res) => {
        const user = req.body
        const application = await dao.createApplication(user)
        res.json(application)
    }

    const withdrawApplication = async (req, res) => {
        const id = req.params['id']
        const status = await dao.withdrawApplication(id)
        res.send(status)
    }


    app.get('/applications/', findAllApplications)
    app.get('/applications/:uid', findApplicationByUserId)
    app.get('/applications/jobs/:jid', findApplicationByJobId)
    app.get('/student/getApplications', findAllApplications)
    app.get('/recruiter/getApplications', findAllJobApplications)
    app.post('/applications', addApplication)
    app.delete('/applications/:id', withdrawApplication)
}

export default ApplicationController