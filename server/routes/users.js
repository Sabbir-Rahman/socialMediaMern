const router = require("express").Router();

const { test, updateUser, deleteUser, viewUser,followUser,unfollowUser } = require("./../controllers/users")

router.get('/',test)
//update user 
router.put('/update/:id',updateUser)
//delete user 
router.delete('/delete/:id',deleteUser)
//get a user
router.get('/:id',viewUser)
//follow a user 
router.put("/follow/:id",followUser)
//unfollow a user
router.put("/unfollow/:id",unfollowUser)
module.exports =router