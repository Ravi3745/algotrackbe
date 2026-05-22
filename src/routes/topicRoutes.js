import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getTopics,
  getProblemsByTopic,
} from "../controllers/topicController.js";

const router = express.Router();

router.get(
  "/",
  protect,
  getTopics
);

router.get(
  "/:id/problems",
  protect,
  getProblemsByTopic
);

export default router;