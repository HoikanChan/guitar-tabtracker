module.exports = {
    register(req, res)  {
        console.log("email", req.body.email);
        res.send({
            message: 'hello ' + req.body.email
        })
    }
}