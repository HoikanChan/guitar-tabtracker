const {
  History,
  Song
} = require('../models')
const _ = require('lodash')
module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const histories = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ],
        order: [
          ['createdAt', 'DESC']
        ] 
      }).map(history => history.toJSON())
        .map(history => _.extend({},
          history.Song,
          history
        ))
      res.send(_.uniqBy(histories, history => history.SongId))
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to fectch History.'
      })
    }
  },
  async post (req, res) {
    try {
      const {SongId} = req.body
      const UserId = req.user.id
      if (UserId && SongId) {
        const newHistory = await History.create({
          UserId: UserId,
          SongId: SongId
        })
        res.send(newHistory)
      } else {
        res.send(null)
      }
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to create history.'
      })
    }
  }
}
