import express from "express";
import Investor from "../models/investor.model.js";

const apiRouter = express.Router();
apiRouter.post("/contact-us", async (req, res) => {
  try {
    const { fullName, email, businessName, subject } = req.body;
    await Investor.create({ fullName, email, businessName, subject });
    res.status(201).json({ message: "Thanks For contacting us" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default apiRouter;
