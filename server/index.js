import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/User.js"
import authRoutes from "./routes/Auth.js"
import cookieParser from "cookie-parser"

const app = express();
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.MONGO_DB).then(() => {
        console.log("connected to DB");
    }).catch((err) => console.log(err))
}

app.use(cookieParser())
app.use(express.json())
app.use("/api", authRoutes);
app.use("/api/users", userRoutes)

//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
});

app.listen(8000, () => {
    connect();
    console.log("Connected!")
})