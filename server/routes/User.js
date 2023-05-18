import express from "express"
import { deleteUser, getUser, update , subscribe, unsubscribe } from "../controllers/User.js";
import { verifyToken } from "../verifyToken.js"

const router = express.Router();

//update user
router.put('/:id', verifyToken, update)

//delete user
router.delete("/:id", verifyToken, deleteUser)

//get user
router.get("/:id", verifyToken, getUser)

//subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

export default router