import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import APIServer from "./job_search_api/index.js"
import chalk from "chalk"

mongoose.connect('mongodb://localhost:27017/JobApplicationTracker');

const app = express();
app.use(cors())
app.use(express.json())
app.listen(4000, () => {
    console.log(chalk.green('Server listening on port 4000'));
} )

APIServer.listen(3000, () => {
    console.log(chalk.green('Server listening on port 3000'));
} )