const {
  User,
  Song,
  Bookmark,
  History
} = require('../src/models')
const Promise = require('bluebird')
const users = require('./users.json')
const songs = require('./songs.json')
const bookmarks = require('./bookmark.json')
const histories = require('./Histories.json')
Promise.all(
users.map(user => {
  User.create(user)
})
)
Promise.all(
songs.map(song => {
  Song.create(song)
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
