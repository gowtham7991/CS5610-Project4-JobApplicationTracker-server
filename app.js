import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import JobsController from "./job/jobs-controller.js"


mongoose.connect('mongodb+srv://riiyabatra:Riya%403579@cluster0.qziefsc.mongodb.net/?retryWrites=true&w=majority');

const app = express();
app.use(cors())
app.use(express.json())
JobsController(app)
app.listen(4000)