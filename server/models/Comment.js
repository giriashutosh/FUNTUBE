import mongoose, { Mongoose } from "mongoose";

const VideoSchema = new mongoose.schema({
    userId: {
        type: String,
        required: true,
       
    },
    videoId: {
        type: String,
        required: true,
       
    },
    desc: {
        type: String,
        required: true,
      },
},
    { timestamps: true }
)

export default mongoose.model("Comment", CommentSchema)