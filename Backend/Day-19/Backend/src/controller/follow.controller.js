const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  try {
    let loggedInUser = req.user.username;
    let requestSender = req.params.username;

    if (loggedInUser === requestSender) {
      return res.status(409).json({
        message: "you cannot follow yourself",
      });
    }

    const isUserExist = await userModel.findOne({
      loggedInUser: requestSender,
    });

    if (!isUserExist) {
      return res.status(404).json({
        message: "this user not exist in userModel",
      });
    }

    const alreadyFollow = await followModel.findOne({
      follower: loggedInUser,
      following: requestSender,
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
      follower: loggedInUser,
      following: requestSender,
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
    let loggedInUser = req.user.username;
    let requestSender = req.params.username;

    if (loggedInUser === requestSender) {
      return res.status(409).json({
        message: "you cant unfollow yourself",
      });
    }

    const isUserExist = await userModel.findOne({
      loggedInUser: requestSender,
    });

    if (!isUserExist) {
      return res.status(404).json({
        message: "user does not exist",
      });
    }

    const isFollowByMe = await followModel.findOne({
      follower: loggedInUser,
      following: requestSender,
    });

    if (!isFollowByMe || isFollowByMe.status !== "accepted") {
      return res.status(409).json({
        message: "you not follow this user yet...",
      });
    } else {
      const unfollowUser = await followModel.findOneAndDelete({
        follower: loggedInUser,
        following: requestSender,
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

async function pendingRequestController(req, res) {
  const loggedInUser = req.user.username;

  const pendingRequests = await followModel.find({
    following: loggedInUser,
    status: "pending",
  });

  if (pendingRequests.length === 0) {
    return res.status(404).json({
      message: "no requests found ",
    });
  }

  res.status(200).json({
    message: "pending requests fetched successfully",
    pendingRequests,
  });
}

async function acceptRequestController(req, res) {
  const loggedInUser = req.user.username;
  const requestSender = req.params.username;

  const isPendingRequest = await followModel.findOne({
    follower: requestSender, //request sender
    following: loggedInUser, //login user
    status: "pending",
  });

  if (!isPendingRequest) {
    return res.status(404).json({
      message: "no pending requests",
    });
  }

  const acceptRequest = await followModel.findOneAndUpdate(
    {
      follower: requestSender,
      following: loggedInUser,
    },
    {
      status: "accepted",
    },
    {
      new: true,
    },
  );

  res.status(200).json({
    message: "request accepted successfully",
    acceptRequest,
  });
}

async function rejectRequestController(req, res) {
  const loggedInUser = req.user.username;
  const requestSender = req.params.username;

  const requestStatus = await followModel.findOne({
    follower: requestSender,
    following: loggedInUser,
    status: "pending",
  });

  if (requestStatus.length === 0) {
    return res.status(404).json({
      message: "no pending requests ",
    });
  }

  const rejectRequest = await followModel.findOneAndDelete({
    follower: requestSender,
    following: loggedInUser,
  });

  res.status(203).json({
    message: "follow request rejected",
    rejectRequest,
  });
}

module.exports = {
  followUserController,
  unfollowController,
  pendingRequestController,
  acceptRequestController,
  rejectRequestController,
};
