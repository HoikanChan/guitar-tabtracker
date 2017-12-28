import Api from '@/services/Api'

export default {
  index ({userId, songId}) {
    return Api().get('bookmarks', {
      params: {
        userId: userId,
        songId: songId
      }
    })
  },
//   post (song) {
//     return Api().post('songs', song)
//   },
//   show (songId) {
//     return Api().get(`songs/${songId}`)
//   },
//   put (songId, song) {
//     return Api().put(`songs/${songId}`, song)
//   }
}
