import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).send("User registered successfully");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  dotenv.config();

  try {
    const user = await User.findOne({ userName: req.body.userName });
    if (!user) {
      res.status(404).send("User not Found");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      res.status(404).send("Username or Password is not correct");
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { isAdmin, password, ...otherDetails } = user._doc;
    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .send({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
