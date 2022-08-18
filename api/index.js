import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to Mongoose");
  } catch (error) {
    //   handleError(error);
    console.log("Error connecting to MongoDB", error);
  }
};
mongoose.connection.on("disconnected", () =>
  console.log("connection successful")
);

mongoose.connection.on("connected", () => console.log("connection successful"));

app.get("/", (req, res) => {
  res.send("hello from API world");
});
app.listen(8080, () => {
  connect();
  console.log("listening on port 8080...");
});
