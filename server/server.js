import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8008;
const uri = process.env.MONGO_URI;

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST","PUT","DELETE","PATCH"],
    credentials: true,
}))

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose.connect(uri).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err.message);
});