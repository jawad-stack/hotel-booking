import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("login page");
});
router.get("/register", (req, res) => {
  res.send("register page");
});
export default router;
