import express from "express"
import { verifyToken } from "../verifyToken.js";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, updateVideo, trend, sub } from "../controllers/Video.js";

const router = express.Router();

//Add a video
router.post("/", verifyToken, addVideo)

//update a video
router.put("/update/:id", verifyToken, updateVideo)

//delete a video
router.delete("/delete/:id", verifyToken, deleteVideo)

//get a video
router.get("/find/:id", getVideo)

//add a view
router.put("/view/:id", addView)

//get trending videos
router.get("/trend", trend)

//get random videos
router.get("/random", random)

//get subscribed videos
router.get("/sub", verifyToken, sub)

//get videos by tags
router.get("/tags", getByTag)

//GET  a video by search query
router.get("/search", search)

export default router;