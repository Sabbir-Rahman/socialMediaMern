const bcrypt = require('bcrypt')
const User = require('./../model/User')

const test = (req,res) => {
    res.send("Hello from user routes")
}

const updateUser = async (req, res) => {

    //if url params userId and body.userId not mtch 
    if (req.body.userId === req.params.id || req.body.isAdmin){
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,salt)


            }catch (err) {
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            })
            
            res.status(200).json("Account has been updated")
        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json("You can update only your account")
    }
}

const deleteUser = async (req, res) => {

    //if url params userId and body.userId not mtch 
    if (req.body.userId === req.params.id || req.body.isAdmin){
        
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted")
        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json("You can delete only your account")
    }
}

const viewUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const {password,updatedAt,...other} = user._doc

        res.status(200).json(other)

    } catch (err) {
        res.status(500).json(err)
    }
}

const followUser = async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try{
            console.log(req.body.userId)
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
           
            if(!user.followers.includes(req.body.userId)){
                
                await user.updateOne({ $push: {followers: req.body.userId}})
                await currentUser.updateOne({ $push: {followings: req.params.userId}})
                res.status(200).json("User has been followed")

            } else {
                res.status(403).json("You already follow this user")
            }
        }catch(err){
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You cannot follow yourself")
    }
}


const unfollowUser = async (req, res) => {
    if(req.body.userId !== req.params.id) {
        try{
            console.log(req.body.userId)
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
           
            if(!user.followers.includes(req.body.userId)){
                
                await user.updateOne({ $push: {followers: req.body.userId}})
                await currentUser.updateOne({ $push: {followings: req.params.userId}})
                res.status(200).json("User has been unfollowed")

            } else {
                res.status(403).json("You already follow this user")
            }
        }catch(err){
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You cannot follow yourself")
    }
}

module.exports ={
    test, updateUser, deleteUser, viewUser, followUser,unfollowUser
}