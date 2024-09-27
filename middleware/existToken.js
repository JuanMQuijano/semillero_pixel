import { request, response } from "express";
import User from "../Models/User.js";

export const existToken = async (req = request, res = response, next) => {
    const { token } = req.params

    try {
        const existUser = await User.findOne({ token })

        if (!existUser) {
            return res.status(400).json({ ok: false, msg: "Token inválido o ya venció" })
        }

        next();
    } catch (error) {
        console.error(error)
    }
}