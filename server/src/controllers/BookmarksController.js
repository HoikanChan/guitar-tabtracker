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
        error: 'An error occured when trying to fectch songs.'
      })
    }
  }
}
