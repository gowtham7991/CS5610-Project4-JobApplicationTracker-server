import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {firstName: String, lastName: String},
    dob: String,
    role: {type: String, enum: ['STUDENT', 'RECRUITER', 'ADMIN']},
    profile:{
        linkedInURL: String,
        workExperience: Number,
        skills: Array,
        image: String,
        graduationDate: String,
        resume: Buffer,
        companyName: String,
        position: String,
        contactPhone: Number,
        department: String
    }
}, {collection: 'Users'})

export default usersSchema