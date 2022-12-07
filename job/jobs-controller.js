import * as dao from './jobs-dao.js'

const JobsController = (app) => {

    const findAllJobs = async (req, res) => {
        const jobs = await dao.findAllJobs()
        res.json(jobs)
    }

    const createJob = async (req, res) => {
        const job = req.body
        const existingJob = await dao.findJobById(job.id)
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