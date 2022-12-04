import * as dao from './users-dao.js'
import {findByCredentials, findByEmail} from "./users-dao.js";

let currentUser = null

const UsersController = (app) => {

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers()
        res.json(users)
    }

    const register = async (req, res) => {
        const user = req.body
        const existingUser = await findByEmail(user.email)
        if (existingUser) {
            res.sendStatus(403)
            return
        }
        const actualUser = await dao.createUser(user)
        currentUser = actualUser
        res.json(actualUser)
    }

    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await findByCredentials(credentials.email, credentials.password)
        if (!existingUser) {
            res.sendStatus(403)
            return
        }
        currentUser = existingUser
        res.json(existingUser)
    }

    const logout = (req, res) => {
        currentUser = null
        res.sendStatus(200)
    }

    app.get('/getProfile', findAllUsers)
    app.post('/register/student', register)
    app.post('/register/recruiter', register)
    app.post('/login', login)
    app.post('/logout', logout)
}

export default UsersController