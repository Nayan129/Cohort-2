const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  try {
    let accountHolderUser = req.user.username;
    let followingAnotherUser = req.params.username;

    if (accountHolderUser === followingAnotherUser) {
      return res.status(409).json({
        message: "you cannot follow yourself",
      });
    }

    const isUserExist = await userModel.findOne({
      username: followingAnotherUser,
    });

    if (!isUserExist) {
      return res.status(404).json({
        message: "this user not exist in userModel",
      });
    }

    const alreadyFollow = await followModel.findOne({
      follower: accountHolderUser,
      following: followingAnotherUser,
    });

    if (alreadyFollow) {
      if (alreadyFollow.status === "pending") {
        return res.status(409).json({
          message: "follow request is pending",
        });
      } else if (alreadyFollow.status === "accepted") {
        return res.status(200).json({
          message: "you already follow this user",
        });
      } else if (alreadyFollow.status === "rejected") {
        alreadyFollow.status = "pending";
        await alreadyFollow.save();

        return res.status(200).json({
          message: "request rejected ❌, follow request sent again",
          alreadyFollow,
        });
      }
    }

    const accountDetails = await followModel.create({
      follower: accountHolderUser,
      following: followingAnotherUser,
    });

    res.status(201).json({
      message: `follow request sent...`,
      accountDetails,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
}

async function unfollowController(req, res) {
  try {
    let accountHolderUser = req.user.username;
    let followingAnotherUser = req.params.username;

    if (accountHolderUser === followingAnotherUser) {
      return res.status(409).json({
        message: "you cant unfollow yourself",
      });
    }

    const isUserExist = await userModel.findOne({
      username: followingAnotherUser,
    });

    if (!isUserExist) {
      return res.status(404).json({
        message: "user does not exist",
      });
    }

    const isFollowByMe = await followModel.findOne({
      follower: accountHolderUser,
      following: followingAnotherUser,
    });

    if (!isFollowByMe || isFollowByMe.status !== "accepted") {
      return res.status(409).json({
        message: "you not follow this user yet...",
      });
    } else {
      const unfollowUser = await followModel.findOneAndDelete({
        follower: accountHolderUser,
        following: followingAnotherUser,
      });

      res.status(200).json({
        message: "you Unfollow user successfully",
        unfollowUser,
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
}

module.exports = {
  followUserController,
  unfollowController,
};
