import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//ADD NEW HOTEL
router.post("/", verifyAdmin, createHotel);

//DELETE HOTEL
router.delete("/:id", verifyAdmin, deleteHotel);
//GET BY ID AND UPDATE

router.put("/:id", verifyAdmin, updateHotel);
//GET BY ID

router.get("/:id", verifyUser, getHotel);

// GET ALL HOTELS

router.get("/", verifyUser, getAllHotels);

export default router;
