import express from "express"
import { deleteUser, getUser, update , subscribe, unsubscribe, like, dislike } from "../controllers/User.js";
import { verifyToken } from "../verifyToken.js"

const router = express.Router();

//update user
router.put('/:id', verifyToken, update)

//delete user
router.delete("/:id", verifyToken, deleteUser)

//get user
router.get("/find/:id",  getUser)

//subscribe a user
router.put("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribe);

//likes by user
router.put("/like/:videoId", verifyToken, like)

//dislike by user
router.put("dislike/:videoId", verifyToken, dislike)


export default router