 const AuthenticationController = require('./controllers/AuthenticationController')
 const SongsController = require('./controllers/SongsController')
 const AuthenticationPolicy = require('./policies/AuthenticationPolicy')
 module.exports = app => {
     app.post("/register",
         AuthenticationPolicy.register,
         AuthenticationController.register
     )
     app.post("/login",
         AuthenticationController.login
     )
     app.get('/songs',
         SongsController.index
     )
     app.get('/songs/:songId',
         SongsController.show
     )
     app.post('/songs',
         SongsController.post
     )
     app.put('/songs/:songId',
         SongsController.put
     )
 }