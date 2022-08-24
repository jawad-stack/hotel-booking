import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
import hotelsRouter from "./routes/hotels.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to Mongoose");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

mongoose.connection.on("disconnected", () =>
  console.log("connection successfull")
);

mongoose.connection.on("connected", () =>
  console.log("connection successfull")
);

//middleware
app.use(express.json());

app.use("/api", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

app.listen(8080, () => {
  connect();
  console.log("listening on port 8080...");
});
