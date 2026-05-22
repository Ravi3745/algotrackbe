import mongoose from "mongoose";

const userProgressSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,

        index: true,
      },

      problem: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Problem",

        required: true,

        index: true,
      },

      completed: {
        type: Boolean,
        default: false,
      },

      completedAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );

userProgressSchema.index(
  {
    user: 1,
    problem: 1,
  },
  {
    unique: true,
  }
);

const UserProgress =
  mongoose.model(
    "UserProgress",
    userProgressSchema
  );

export default UserProgress;