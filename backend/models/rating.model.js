import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  contentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Content", // Assuming you have a content model
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5, // Allow ratings between 1 and 5 stars
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Rating = mongoose.model("Rating", ratingSchema);
export default Rating;
