import { request, response } from "express";
import User from "../Models/User.js";

export const existEmail = async (req = request, res = response, next) => {

    const { email } = req.body

    try {
        const existUser = await User.findOne({ email })

        if (existUser) {
            return res.status(400).json({ ok: false, msg: "Email already in use" })
        }

        next();
    } catch (error) {
        console.error(error)
    }

}