import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {firstName: String, lastName: String},
    dob: String,
    role: {type: String, enum: ['STUDENT', 'RECRUITER', 'ADMIN']},
    profile:{
        aboutMe: String,
        linkedInURL: String,
        githubURL: String,
        workExperience: Number,
        skills: Array,
        image: String,
        graduationDate: String,
        website: String,
        companyName: String,
        position: String,
        mobileNumber: Number,
        department: String,
        address: String,
        educationLevel: String,
        major: String,
        GPA: Number
    }
}, {collection: 'Users'})

export default usersSchema