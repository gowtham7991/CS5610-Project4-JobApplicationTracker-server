import usersModel from "./users-model.js";

export const createUser = (user) =>
    usersModel.create(user)

export const findAllUsers = () =>
    usersModel.find()

export const findUserById = (uid) =>
    usersModel.findById(uid)

export const findByEmail = (email) =>
    usersModel.findOne({email})

export const findBimport usersModel from "./users-model.js";

export const createUser = (user) =>
    usersModel.create(user)

export const findAllUsers = () =>
    usersModel.find()

export const findUserById = (uid) =>
    usersModel.findById(uid)

export const findByEmail = (email) =>
    usersModel.findOne({email})

export const findByCredentials = (email, password) =>
    usersModel.findOne(
        {email, password},
        {password: false})
yCredentials = (email, password) =>
    usersModel.findOne(
        {email, password},
        {password: false})
