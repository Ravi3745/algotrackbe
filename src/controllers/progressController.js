import UserProgress from "../models/UserProgress.js";

export const toggleProgress =
  async (req, res) => {
    try {
      const { problemId } =
        req.body;

      const userId =
        req.user._id;

      let progress =
        await UserProgress.findOne({
          user: userId,
          problem: problemId,
        });

      if (progress) {
        progress.completed =
          !progress.completed;

        progress.completedAt =
          progress.completed
            ? new Date()
            : null;

        await progress.save();
      } else {
        progress =
          await UserProgress.create({
            user: userId,
            problem: problemId,
            completed: true,
            completedAt: new Date(),
          });
      }

      res.status(200).json({
        success: true,
        progress,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

export const getUserProgress =
  async (req, res) => {
    try {
      const progress =
        await UserProgress.find({
          user: req.user._id,
          completed: true,
        });

      res.status(200).json({
        success: true,
        progress,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };