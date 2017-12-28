const {
    Bookmark
  } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songId = req.query.songId
      const userId = req.query.userId
      let bookmark = null
      bookmark = await Bookmark.findOne({
        where: {
          songId: songId,
          userId: userId
        }
      })
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
      if (!!bookmark.userId && !!bookmark.songId) {
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
