const {
  User,
  Song,
  Bookmark,
  History,
  mongoose
} = require('../src/models')
const Promise = require('bluebird')
const users = require('./users.json')
// const songs = require('./songs.json')
const songs = require('../crawler/songs.json')
const bookmarks = require('./bookmark.json')
const histories = require('./Histories.json')
const config = require('../src/config/config')
mongoose.connect(config.db.path)

console.log(songs)
Promise.all(
  users.map(user => {
    User.create(user)
  })
)
Promise.all(
  Object.keys(songs).map(key => {
    console.log(songs[key])
    Song.create(songs[key])
  })
)
Promise.all(
bookmarks.map(bookmark => {
  Bookmark.create(bookmark)
})
)
Promise.all(
histories.map(history => {
  History.create(history)
})
)
