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
  post (bookmark) {
    return Api().post('bookmarks', bookmark)
  },
  delete (bookmarkId) {
    return Api().delete(`bookmarks/${bookmarkId}`)
  }
}
