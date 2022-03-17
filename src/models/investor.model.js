import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    email: { type: String },
    subject: { type: String },
    businessName: { type: String },
  },
  { timestamps: true }
);

const Investor = mongoose.model("Investor", contactSchema);
export default Investor;
