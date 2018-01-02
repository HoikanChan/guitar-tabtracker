const {
  Bookmark,
  Song
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {userId, songId} = req.query
      let where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }
      const bookmark = await Bookmark.findAll({
        where: where,
        include: [
          {
            model: Song
          }
        ]
      }).map(bookmark => bookmark.toJSON())
        .map(bookmark => bookmark.Song)
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to fectch bookmark.'
      })
    }
  },
  async post (req, res) {
    try {
      const bookmark = req.body
      if (!!bookmark.UserId && !!bookmark.SongId) {
        const sameExistBookmark = await Bookmark.findOne({
          where: req.body
        })
        let newBookmark = null
        if (!sameExistBookmark) {
          newBookmark = await Bookmark.create(bookmark)
        }
        res.send(newBookmark)
      } else {
        res.send(null)
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to create bookmark.'
      })
    }
  },
  async delete (req, res) {
    try {
      const bookmarkId = req.params.bookmarkId
      if (bookmarkId) {
        const bookmarkToRemove = await Bookmark.findOne({
          where: {
            id: bookmarkId
          }
        })
        bookmarkToRemove.destroy()  
        res.send(bookmarkToRemove)
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to delete bookmark.'
      })
    }
  }
}
