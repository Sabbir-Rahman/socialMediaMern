const router = require("express").Router()
const {createConversation,getConversations} = require('../controllers/conversation')

//new conversation
router.post("/",createConversation)
//get conversation of a user
router.get("/:userId",getConversations)

module.exports = router