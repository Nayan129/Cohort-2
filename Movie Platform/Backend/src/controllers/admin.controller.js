import userModel from "../models/auth.model.js";

/*
  Get all users
*/
async function getAllUsers(req, res) {
  try {
    const users = await userModel.find().select("-password").lean();

    res.status(200).json({
      message: "Users fetched successfully",
      total: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

/*
  Ban user
*/
async function banUser(req, res) {
  try {
    const userId = req.params.id;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.isBanned = true;
    await user.save();

    res.status(200).json({
      message: "User banned successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

/*
  Delete user
*/
async function deleteUser(req, res) {
  try {
    const userId = req.params.id;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await userModel.findByIdAndDelete(userId);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export default {
  getAllUsers,
  banUser,
  deleteUser,
};
