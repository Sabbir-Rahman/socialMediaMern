const router = require('express').Router();

const multer = require("multer")
let checkBody = ''

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req,file, cb)=> {
        
        cb(null, req.body.name )
    },
})


const upload = multer({ storage })


router.post('/',upload.single("file"),(req,res)=>{
    console.log(checkBody)
    try{
        return res.status(200).json("File upload successfully")
    }catch(err){
        console.log(err)
    }
})

module.exports = router