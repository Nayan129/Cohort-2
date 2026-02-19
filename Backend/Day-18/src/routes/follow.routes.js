const express = require("express");
const followController = require("../controller/follow.controller");
const identifyUser = require("../middlewares/auth.middleware");

const followRouter = express.Router();

// route : POST "/api/users/follow/:username"
followRouter.post(
  "/follow/:username",
  identifyUser,
  followController.followUserController,
);

// route : GET "/api/users/requests/"
followRouter.get(
  "/request/",
  identifyUser,
  followController.pendingRequestController,
);

// route : PUT "/api/users/accept/:username"

followRouter.put(
  "/acceptRequest/:username",
  identifyUser,
  followController.acceptRequestController,
);

// route : DELETE "/api/users/unfollow/:username"
followRouter.delete(
  "/unfollow/:username",
  identifyUser,
  followController.unfollowController,
);

module.exports = followRouter;
