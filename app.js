import dotenv from "dotenv"
import express from "express"
import dbConnect from "./config/dbConnect.js";
import router from "./Routes/userRoutes.js";
dotenv.config()

await dbConnect()

const PORT = process.env.PORT || 4000;

const server = express();
server.use(express.json())

server.use("/api/v1/users", router)

server.listen(PORT, () => {
    console.log(`Funcionando en el puerto ${PORT}`)
})