import * as dao from './jobs-dao.js'
import url from "url";
import config from "../job_search_api/config.js";
import axios from "axios";
import chalk from "chalk";

const JobsController = (app) => {

    const findAllJobs = async (req, res) => {
        const jobs = await dao.findAllJobs()
        res.json(jobs)
    }

    const findJobById = async (req, res) => {
        const jid = req.params['jid']
        const jobs = await dao.findJobById(jid)
        res.json(jobs)
    }

    const findJobByCompanyId = async (req, res) => {
        const company = req.params.company
        const jobs = await dao.findJobByCompanyId(company)
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

    const deleteJob   = async (req, res) => {
        const jid = req.params['jid']
        const status = await dao.deleteJob(jid)
        res.send(status)
    }
    const headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'
    };

    const decodeAPIParams = searchParams => Array
        .from(searchParams.keys())
        .reduce((acc, key) => ({...acc, [key]: searchParams.get(key)}), {});

    const findExternalJobs = (req, res) => {
        const requestURL = url.parse(req.url);
        const decodedParams = decodeAPIParams(new URLSearchParams(requestURL.search));
        const {search, location, country = 'us', sort_by = 'date'} = decodedParams;
        let api_string = `${config.BASE_URL}/${country.toLowerCase()}/${config.BASE_PARAMS}&app_id=${config.APP_ID}&app_key=${config.API_KEY}&sort_by=${sort_by}`;
        if (search != null) {
            api_string += `&what=${search}`;
        }
        if (location != null) {
            api_string += `&where=${location}`;
        }
        const targetURL = api_string;
        if (req.method === 'GET') {
            // console.log(chalk.green(`Proxy GET request to : ${targetURL}`));
            axios.get(targetURL)
                .then(response => {
                    res.writeHead(200, headers);
                    res.end(JSON.stringify(response.data));
                })
                .catch(error => {
                    console.log(chalk.red(error));
                    res.writeHead(500, headers);
                    res.end(JSON.stringify(error.data));
                })
        }
    };

    app.get('/jobs', findAllJobs)
    app.get('/jobs/external/', findExternalJobs)
    app.get('/jobs/:jid', findJobById)
    app.post('/jobs/create', createJob)
    app.delete('/jobs/:jid', deleteJob)
    app.get('/postings', findAllJobs)
    app.get('/postings/company/:company', findJobByCompanyId)
    app.put('/jobs/:jid', updateJob)

}

export default JobsController