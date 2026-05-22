import Topic from "../models/Topic.js";

import Problem from "../models/Problem.js";

import UserProgress from "../models/UserProgress.js";

export const getTopics =
    async (req, res) => {
        try {
            const topics =
                await Topic.find().sort({
                    order: 1,
                });

            const topicsWithStats =
                await Promise.all(
                    topics.map(
                        async (topic) => {
                            // Total Problems
                            const totalProblems =
                                await Problem.countDocuments(
                                    {
                                        topic:
                                            topic._id,
                                    }
                                );

                            // Problem IDs
                            const problems =
                                await Problem.find({
                                    topic:
                                        topic._id,
                                }).select("_id");

                            const problemIds =
                                problems.map(
                                    (problem) =>
                                        problem._id
                                );

                            // Completed Problems
                            const completedProblems =
                                await UserProgress.countDocuments(
                                    {
                                        user:
                                            req.user
                                                ._id,

                                        problem: {
                                            $in:
                                                problemIds,
                                        },

                                        completed: true,
                                    }
                                );

                            // Progress %
                            const progress =
                                totalProblems > 0
                                    ? Math.floor(
                                        (completedProblems /
                                            totalProblems) *
                                        100
                                    )
                                    : 0;

                            return {
                                ...topic.toObject(),

                                totalProblems,

                                completedProblems,

                                progress,
                            };
                        }
                    )
                );

            res.status(200).json({
                success: true,

                topics:
                    topicsWithStats,
            });
        } catch (error) {
            res.status(500).json({
                success: false,

                message:
                    error.message,
            });
        }
    };

export const getProblemsByTopic =
    async (req, res) => {
        try {
            const { id } = req.params;

            const problems =
                await Problem.find({
                    topic: id,
                })
                    .populate("topic")
                    .sort({ order: 1 });

            res.status(200).json({
                success: true,

                problems,
            });
        } catch (error) {
            res.status(500).json({
                success: false,

                message:
                    error.message,
            });
        }
    };