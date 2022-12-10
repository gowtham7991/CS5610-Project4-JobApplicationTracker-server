import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import JobsController from "./job/jobs-controller.js"
import CompanyController from "./company/company-controller.js"
import UsersController from "./user/users-controller.js";
import ApplicationController from "./application/application-controller.js";
import chalk from "chalk"

mongoose.connect('mongodb+srv://riiyabatra:Riya%403579@cluster0.qziefsc.mongodb.net/?retryWrites=true&w=majority');

const app = express();
app.use(cors())
app.use(express.json())

JobsController(app);
CompanyController(app);
UsersController(app);
ApplicationController(app);

app.listen(4000, () => {
    console.log(chalk.green('Server listening on port 4000'));
})

