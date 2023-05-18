import Video from "../models/Video.js"

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const newVideo = await newVideo.save()
        res.status(200).json(newVideo)
    } catch (err) {
        next(err)
    }
}