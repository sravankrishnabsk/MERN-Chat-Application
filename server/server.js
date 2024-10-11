import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 8008;
const uri = process.env.MONGO_URI;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect(uri).then(()=>{
    console.log("Database Connected");
})