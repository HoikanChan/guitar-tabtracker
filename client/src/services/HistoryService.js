import Api from '@/services/Api'

export default {
  index () {
    return Api().get('histories')
  },
  post (history) {
    return Api().post('histories', history)
  }
}
