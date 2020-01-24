import store from '../store'

export default function (to, from, next) {
  const user = store.getters['user/userUid']
  if (user) {
    next()
  } else {
    next('/login?LoginError=true')
  }
}
