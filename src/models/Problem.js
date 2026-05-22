import mongoose from "mongoose";

import { DIFFICULTY }
from "../constants/difficulty.js";

const problemSchema =
  new mongoose.Schema(
    {
      topic: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Topic",

        required: true,

        index: true,
      },

      title: {
        type: String,
        required: true,
        trim: true,
      },

      difficulty: {
        type: String,

        enum: Object.values(
          DIFFICULTY
        ),

        required: true,
      },

      youtubeLink: {
        type: String,
        default: "",
      },

      leetcodeLink: {
        type: String,
        default: "",
      },

      articleLink: {
        type: String,
        default: "",
      },

      order: {
        type: Number,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  );

const Problem = mongoose.model(
  "Problem",
  problemSchema
);

export default Problem;