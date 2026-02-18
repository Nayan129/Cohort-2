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

    const userAlreadyFollow = await followModel.findOne({
      follower: accountHolderUser,
      following: followingAnotherUser,
    });

    if (userAlreadyFollow) {
      return res.status(409).json({
        message: `you already follow this user`,
      });
    }

    const accountDetails = await followModel.create({
      follower: accountHolderUser,
      following: followingAnotherUser,
    });

    res.status(201).json({
      message: `you started following this user`,
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

    if (!isFollowByMe) {
      return res.status(409).json({
        message: "you not follow this user yet...",
      });
    }

    const unfollowUser = await followModel.findOneAndDelete({
      follower: accountHolderUser,
      following: followingAnotherUser,
    });

    res.status(200).json({
      message: "you Unfollow user successfully",
      unfollowUser,
    });
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
