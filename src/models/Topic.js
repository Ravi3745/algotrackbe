import mongoose from "mongoose";

const topicSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
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

const Topic = mongoose.model(
  "Topic",
  topicSchema
);

export default Topic;