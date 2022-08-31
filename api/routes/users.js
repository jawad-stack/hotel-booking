import express from "express";
import {
  deleteUser,
  getUser,
  getAllUsers,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// router.get("/authentication", verifyToken, (req, res, next) => {
//   res.send("You are logged in");
// });

// router.get("/checkAuthority/:id", verifyUser, (req, res, next) => {
//   res.send("You are logged in and can delete user");
// });

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Admin, You are logged in and can do anything");
// });

//DELETE User
router.delete("/:id", verifyUser, deleteUser);
//GET BY ID AND UPDATE

router.put("/:id", verifyUser, updateUser);
//GET BY ID

router.get("/:id", verifyUser, getUser);

// GET ALL UserS

router.get("/", verifyAdmin, getAllUsers);

export default router;
