const {
    User
} = require("../models")
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}
module.exports = {
    register(req, res) {
        console.log(req.body)
        try {
            User.create(req.body).then(user => {
                console.log(user)
                const userJson = user.toJSON()
                res.send({
                    user:userJson,
                    token:jwtSignUser(userJson)
                })
            });
        } catch (error) {
            res.status(400).send({
                error: "The email has been exited"
            })
        }
    },
    login(req, res) {
        try {
            const {
                email,
                password
            } = req.body

            User.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (!user) {
                    return res.status(403).send({
                        error: 'The login infomation was incorrect '
                    })
                }
                console.log("password", password);
                user.comparePassword(password).then(isPasswordValid => {
                    console.log("password check", isPasswordValid);
                    if (!isPasswordValid) {
                        return res.status(403).send({
                            error: 'The password was incorrect'
                        })
                    }
                    const userJson = user.toJSON()
                    res.send({
                        user: userJson,
                        token: jwtSignUser(userJson)
                    })
                })
            })
        } catch (error) {
            res.status(500).send({
                error: "The error was happend when login"
            })
        }
    }
}