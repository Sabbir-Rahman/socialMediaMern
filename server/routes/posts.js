const router = require('express').Router();
const { test, createPost,updatePost, deletePost,likeDislikePost,viewPost,getTimelinePosts,getUsersPosts } = require('./../controllers/posts')


router.get('/',test)

//create a post
router.post('/create',createPost)
//update a post
router.put('/update/:id',updatePost)
//delete a post
router.delete('/delete/:id',deletePost)
//like dislike a post
router.put('/likeDislike/:id',likeDislikePost)
//get a post
router.get('/view/:id',viewPost)
//get timeline posts 
router.get('/timeline/:userId',getTimelinePosts)
//getUsersPosts
router.get('/profile/:username',getUsersPosts)

module.exports = router