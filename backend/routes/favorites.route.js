import express from "express";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../controllers/favorites.controller.js";

const router = express.Router();

router.get("/favorites", getFavorites);
router.post("/favorites/:id", addFavorite);
router.delete("/favorites/:id", removeFavorite);

export default router;
