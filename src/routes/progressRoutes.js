import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  toggleProgress,
  getUserProgress,
} from "../controllers/progressController.js";

const router = express.Router();

router.post(
  "/toggle",
  protect,
  toggleProgress
);

router.get(
  "/me",
  protect,
  getUserProgress
);

export default router;