const {
  History,
  Song
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const {userId} = req.query
      const history = await History.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      }).map(history => history.toJSON())
        .map(history => history.Song)
      res.send(history)
    //   let set = {}
    //   console.log('histories', histories.map(history => history.id))
    //   let songIds = [...new Set(histories.map(history => history.id))]
    //   let result = songIds.slice()
    //   console.log('songIds', id)
    //   while (songIds.length) {
    //     let songId = songIds.pop()
    //     histories.forEach(history => {
    //       if (history.id === songId) {
    //         set[songId] = history.id
    //       }
    //     })
    //   }
    //   console.log(set)
    //   res.send(result.map(id => set[id]))
    } catch (err) {
      res.status(500).send({
        error: 'An error occured when trying to fectch History.'
      })
    }
  },
  async post (req, res) {
    try {
      const history = req.body
      if (!!history.UserId && !!history.SongId) {
        const newHistory = await History.create(history)
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
