import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

//ADD NEW HOTEL
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE HOTEL
router.delete("/:id", async (req, res) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Deleted success fully");
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET BY ID

router.get("/:id", async (req, res) => {
  try {
    const findAHotel = await Hotel.findById(req.params.id);
    res.status(200).json(findAHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL HOTELS

router.get("/", async (req, res) => {
  try {
    const getAllHotels = await Hotel.find();
    res.status(200).json(getAllHotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
