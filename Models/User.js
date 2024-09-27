import { Schema, model } from "mongoose"
import { generarToken } from "../utils/generarToken.js";

const userSchema = Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    token: {
        type: String,
        default: generarToken()
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

userSchema.methods.toJSON = function () {
    const { __v, createdAt, updatedAt, password, _id, token, ...rest } = this.toObject()

    rest.id = _id;

    return rest;
}

const User = model("User", userSchema)
export default User