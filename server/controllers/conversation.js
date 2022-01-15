const Conversation = require('./../model/Conversation')

const createConversation = async (req,res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    } catch (err) {
        res.status(500).json(err)
    }
    
}

const getConversations = async (req,res) => {
    try {
        const getConversation = await Conversation.find({
            members: { $in : [req.params.userId]}
        })
        res.status(200).json(getConversation)
    } catch(err){
        res.status(500).json(err)
    }
}

module.exports = {createConversation,getConversations}