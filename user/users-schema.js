import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {firstName: String, lastName: String},
    dob: Date,
    role: {type: String, enum: ['STUDENT', 'RECRUITER', 'ADMIN']},
    profile:{
        linkedInURL: String,
        workExperience: Number,
        skills: Array,
        image: String,
    }
}, {collection: 'users'})

export default usersSchema