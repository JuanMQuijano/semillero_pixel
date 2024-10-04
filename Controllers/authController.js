import { request, response } from "express";
import bcrypt from "bcrypt"
import User from "../Models/User.js";
import generarJWT from "../utils/generateJWT.js";

export const login = async (req = request, res = response) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ ok: false, msg: "Not account related to email: " + email })
        }

        if (!user.verified) {
            return res.status(404).json({ ok: false, msg: "Please Verify Your account " })
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ ok: false, msg: "Password doesn't match" })
        }

        return res.status(200).json({ user, jwt: generarJWT(user._id) })
    } catch (error) {
        console.error(error)
    }
}