import express from 'express'
import cors from 'cors'
import mongoose from "mongoose"
import UsersController from "./user/users-controller.js";
import ApplicationController from "./application/application-controller.js";

mongoose.connect('mongodb+srv://riiyabatra:Riya%403579@cluster0.qziefsc.mongodb.net/?retryWrites=true&w=majority');

const app = express();
app.use(cors())
app.use(express.json())

UsersController(app);
ApplicationController(app);

app.listen(4000)