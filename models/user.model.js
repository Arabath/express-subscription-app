import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trime: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid name address'],
    },
    password: {
        type: String,
        required: [true, 'User password is required.'],
        minLength: 6,
    }
}, { timestamps: true});

const User = mongoose.model( 'model', userSchema );

export default User;