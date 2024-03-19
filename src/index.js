import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from 'mongoose';
import BooksRouter from "./Routes/Books.js"

const app = express();

app.use(express.json())
app.use("/books", BooksRouter)

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port ${process.env.PORT}`);
  })
}).catch(error => {
  console.log("Mongoose Error", error);

});