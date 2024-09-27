import Router from "express";
import { createUser, verifyUser } from "../Controllers/userController.js";
import { existEmail } from "../middleware/existEmail.js";
import { existToken } from "../middleware/existToken.js";

const router = Router();

//Crear Usuario
router.post("/", [existEmail], createUser);

//Verificar Cuenta Usuario
router.get("/verify/:token", [existToken], verifyUser);

export default router