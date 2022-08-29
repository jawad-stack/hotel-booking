import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  updateHotel,
} from "../controllers/hotel.js";
const router = express.Router();

//ADD NEW HOTEL
router.post("/", createHotel);

//DELETE HOTEL
router.delete("/:id", deleteHotel);
//GET BY ID AND UPDATE

router.get("/:id", updateHotel);
//GET BY ID

router.get("/:id", getHotel);

// GET ALL HOTELS

router.get("/", getAllHotels);

export default router;
