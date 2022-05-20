const router = require("express").Router();

const {
  getAllUsers,
  updateUser,
  deleteUser,
  viewUser,
  followUser,
  unfollowUser,
  getFriendList,
} = require("./../controllers/users");

router.get("/", getAllUsers);
//update user
router.put("/update/:id", updateUser);
//delete user
router.delete("/delete/:id", deleteUser);
//get a user
router.get("/view", viewUser);
//follow a user
router.put("/follow/:id", followUser);
//unfollow a user
router.put("/unfollow/:id", unfollowUser);
//get friends
router.get("/friends/:userId", getFriendList);

module.exports = router;
