const {User} =require("../models")
//todo:can't create db item
module.exports = {
    register(req, res){
        console.log(req.body)
        try{
             User.create(req.body).then(user=>{
                 console.log(user)
                 res.send(user.toJSON())
             });
        }catch(error){
            res.status(400).send({
                error:"The email has been exited"
            })
        }
    }
}