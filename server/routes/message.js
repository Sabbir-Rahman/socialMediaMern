const router = require("express").Router()
const {createMessage,getMessages} = require('../controllers/message')

router.post("/",createMessage)
router.get("/:conversationId",getMessages)

module.exports = router