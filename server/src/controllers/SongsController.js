const {
  Song
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      console.log(req.query)
      const search = req.query.search
      let song = null
      if (search) {
        song = await Song.findAll({
          where: {
            $or: [
              'title',
              'album',
              'artist',
              'genre'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        song = await Song.findAll({
          limit: 10
        })
      }
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to fectch songs.'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Song.findAll({
        where: {
          id: req.params.songId
        }
      })
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to fectch songs.'
      })
    }
  },
  async put (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to update songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to create songs.'
      })
    }
  }
}