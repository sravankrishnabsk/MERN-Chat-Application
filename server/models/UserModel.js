import { genSalt, hash } from "bcrypt";
import mongoose from "mongoose";

 
 const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true,"Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true,"Password is required"],
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    color:{
        type: String,
        required: false,
    },
    profileSetup: {
        type: Boolean,
        default: false,
    }
});

// pre is a middleware that runs before the save method or before saving the data to the database.
userSchema.pre("save",async function(next) {
    const salt = await genSalt();
    this.password = await hash(this.password,salt);
    next();
    // why next()? because we are using a middleware and we need to tell the middleware that we are done with the current operation and we can move to the next operation.
});

const User = mongoose.model("Users",userSchema);

export default User;