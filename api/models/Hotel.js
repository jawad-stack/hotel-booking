import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  type: {
    type: "string",
    required: true,
  },
  city: {
    type: "string",
    required: true,
  },
  desc: {
    type: "string",
    required: true,
  },
  photos: {
    type: ["string"],
  },
  address: {
    type: "string",
    required: true,
  },
  rating: {
    type: "number",
    min: 1,
    max: 5,
    default: 5,
  },
  title: {
    type: "string",
    required: true,
  },
  rooms: {
    type: ["string"],
  },
  cheapestPrice: {
    type: "number",
    required: true,
  },
  featured: {
    type: "boolean",
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema);
