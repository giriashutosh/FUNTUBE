import express from "express"
import { signup, signIn } from "../controllers/Auth.js";

const router = express.Router();

//CREATE A USER
router.post('/signup', signup)

//SIGN IN A USER
router.post('/signIn', signIn)

export default router