import dotenv from "dotenv";

import connectDB from "../config/db.js";

import Topic from "../models/Topic.js";

import Problem from "../models/Problem.js";

import { DIFFICULTY }
from "../constants/difficulty.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Topic.deleteMany();

    await Problem.deleteMany();

    console.log("Old data deleted");

    // Create Topics
    const topics =
      await Topic.insertMany([
        {
          title: "Arrays",
          description:
            "Array based DSA problems",
          order: 1,
        },

        {
          title: "Linked List",
          description:
            "Linked List problems",
          order: 2,
        },

        {
          title: "Trees",
          description:
            "Binary Tree & BST problems",
          order: 3,
        },

        {
          title: "Graphs",
          description:
            "Graph traversal & algorithms",
          order: 4,
        },

        {
          title:
            "Dynamic Programming",

          description:
            "DP based problems",

          order: 5,
        },

        {
          title: "Stacks & Queues",

          description:
            "Stack and Queue problems",

          order: 6,
        },
      ]);

    console.log("Topics seeded");

    // Problems
    await Problem.insertMany([
      // ARRAYS

      {
        topic: topics[0]._id,

        title: "Two Sum",

        difficulty:
          DIFFICULTY.EASY,

        youtubeLink:
          "https://www.youtube.com/results?search_query=two+sum+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/two-sum/",

        articleLink:
          "https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/",

        order: 1,
      },

      {
        topic: topics[0]._id,

        title:
          "Best Time to Buy and Sell Stock",

        difficulty:
          DIFFICULTY.EASY,

        youtubeLink:
          "https://www.youtube.com/results?search_query=best+time+to+buy+and+sell+stock+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",

        articleLink:
          "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/",

        order: 2,
      },

      {
        topic: topics[0]._id,

        title: "Maximum Subarray",

        difficulty:
          DIFFICULTY.MEDIUM,

        youtubeLink:
          "https://www.youtube.com/results?search_query=maximum+subarray+kadane+algorithm",

        leetcodeLink:
          "https://leetcode.com/problems/maximum-subarray/",

        articleLink:
          "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/",

        order: 3,
      },

      {
        topic: topics[0]._id,

        title: "3Sum",

        difficulty:
          DIFFICULTY.MEDIUM,

        youtubeLink:
          "https://www.youtube.com/results?search_query=3sum+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/3sum/",

        articleLink:
          "https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/",

        order: 4,
      },

      {
        topic: topics[0]._id,

        title:
          "Trapping Rain Water",

        difficulty:
          DIFFICULTY.HARD,

        youtubeLink:
          "https://www.youtube.com/results?search_query=trapping+rain+water+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/trapping-rain-water/",

        articleLink:
          "https://www.geeksforgeeks.org/trapping-rain-water/",

        order: 5,
      },

      // LINKED LIST

      {
        topic: topics[1]._id,

        title:
          "Reverse Linked List",

        difficulty:
          DIFFICULTY.EASY,

        youtubeLink:
          "https://www.youtube.com/results?search_query=reverse+linked+list+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/reverse-linked-list/",

        articleLink:
          "https://www.geeksforgeeks.org/reverse-a-linked-list/",

        order: 1,
      },

      {
        topic: topics[1]._id,

        title:
          "Linked List Cycle",

        difficulty:
          DIFFICULTY.EASY,

        youtubeLink:
          "https://www.youtube.com/results?search_query=linked+list+cycle+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/linked-list-cycle/",

        articleLink:
          "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",

        order: 2,
      },

      {
        topic: topics[1]._id,

        title:
          "Merge Two Sorted Lists",

        difficulty:
          DIFFICULTY.EASY,

        youtubeLink:
          "https://www.youtube.com/results?search_query=merge+two+sorted+lists+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/merge-two-sorted-lists/",

        articleLink:
          "https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/",

        order: 3,
      },

      // TREES

      {
        topic: topics[2]._id,

        title:
          "Binary Tree Inorder Traversal",

        difficulty:
          DIFFICULTY.MEDIUM,

        youtubeLink:
          "https://www.youtube.com/results?search_query=binary+tree+inorder+traversal",

        leetcodeLink:
          "https://leetcode.com/problems/binary-tree-inorder-traversal/",

        articleLink:
          "https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/",

        order: 1,
      },

      {
        topic: topics[2]._id,

        title:
          "Maximum Depth of Binary Tree",

        difficulty:
          DIFFICULTY.EASY,

        youtubeLink:
          "https://www.youtube.com/results?search_query=maximum+depth+of+binary+tree",

        leetcodeLink:
          "https://leetcode.com/problems/maximum-depth-of-binary-tree/",

        articleLink:
          "https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/",

        order: 2,
      },

      // GRAPHS

      {
        topic: topics[3]._id,

        title:
          "Number of Islands",

        difficulty:
          DIFFICULTY.MEDIUM,

        youtubeLink:
          "https://www.youtube.com/results?search_query=number+of+islands+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/number-of-islands/",

        articleLink:
          "https://www.geeksforgeeks.org/find-the-number-of-islands-using-dfs/",

        order: 1,
      },

      {
        topic: topics[3]._id,

        title:
          "Clone Graph",

        difficulty:
          DIFFICULTY.MEDIUM,

        youtubeLink:
          "https://www.youtube.com/results?search_query=clone+graph+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/clone-graph/",

        articleLink:
          "https://www.geeksforgeeks.org/clone-an-undirected-graph/",

        order: 2,
      },

      // DYNAMIC PROGRAMMING

      {
        topic: topics[4]._id,

        title:
          "Climbing Stairs",

        difficulty:
          DIFFICULTY.EASY,

        youtubeLink:
          "https://www.youtube.com/results?search_query=climbing+stairs+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/climbing-stairs/",

        articleLink:
          "https://www.geeksforgeeks.org/count-ways-reach-nth-stair/",

        order: 1,
      },

      {
        topic: topics[4]._id,

        title:
          "House Robber",

        difficulty:
          DIFFICULTY.MEDIUM,

        youtubeLink:
          "https://www.youtube.com/results?search_query=house+robber+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/house-robber/",

        articleLink:
          "https://www.geeksforgeeks.org/find-maximum-possible-stolen-value-houses/",

        order: 2,
      },

      // STACKS & QUEUES

      {
        topic: topics[5]._id,

        title:
          "Valid Parentheses",

        difficulty:
          DIFFICULTY.EASY,

        youtubeLink:
          "https://www.youtube.com/results?search_query=valid+parentheses+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/valid-parentheses/",

        articleLink:
          "https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/",

        order: 1,
      },

      {
        topic: topics[5]._id,

        title:
          "Min Stack",

        difficulty:
          DIFFICULTY.MEDIUM,

        youtubeLink:
          "https://www.youtube.com/results?search_query=min+stack+leetcode",

        leetcodeLink:
          "https://leetcode.com/problems/min-stack/",

        articleLink:
          "https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/",

        order: 2,
      },
    ]);

    console.log(
      "Problems seeded"
    );

    console.log(
      "Database seeded successfully"
    );

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedData();