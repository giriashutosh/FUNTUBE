import express from "express"
import { user } from "../controllers/User.js";

const router = express.Router();

router.get('/test', user)

export default router