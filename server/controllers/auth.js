const User = require('./../model/User')
const bcrypt = require('bcrypt')

const test = (req,res) => {
    res.send('Hello from auth')
}

const register = async (req, res) => {
    const { username, email,password } = req.body
    

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await new User({
            username: username,
            email:email,
            password: hashedPassword,
        })
        const user = await newUser.save()
        res.status(200).json(user) 
    } catch (err) {
        console.log(err)
    }

}

const login = async (req,res) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({email:email})
        if (!user) {
            res.status(404).json("User not found")
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if(!validPassword) {
            res.status(400).json("Wrong password")
        }

        res.status(200).json(user)
    }catch (err) {
        console.log(err)
    }
}

module.exports = {
    test, register, login
}