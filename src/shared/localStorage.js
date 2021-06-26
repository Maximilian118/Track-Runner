import { removeKey } from '../shared/utility'

export const checkLocalStorage = () => {
  const token = localStorage.getItem('token')
  const refreshToken = localStorage.getItem("refresh_token")
  if (!token && !refreshToken) {
    return logout()
  } else {
    const _id = localStorage.getItem('_id')
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const profile_picture = localStorage.getItem('profile_picture')
    const posts = JSON.parse(localStorage.getItem('posts'))
    const following = JSON.parse(localStorage.getItem('following'))

    return {
      localStorage: true,
      _id: _id,
      token: token,
      name: name,
      email: email,
      profile_picture: profile_picture,
      posts: posts,
      following: following,
    }
  }
}

export const logout = () => {
  localStorage.removeItem('_id')
  localStorage.removeItem('token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('name')
  localStorage.removeItem('email')
  localStorage.removeItem('profile_picture')
  localStorage.removeItem('posts')
  localStorage.removeItem('following')
  localStorage.removeItem('cal')

  return {}
}

export const logInSuccess = userObj => {
  if (!userObj.localStorage) {
    localStorage.setItem('_id', userObj._id)
    localStorage.setItem('token', userObj.token)
    localStorage.setItem('name', userObj.name)
    localStorage.setItem('email', userObj.email)
    localStorage.setItem('profile_picture', userObj.profile_picture)
    localStorage.setItem('posts', JSON.stringify(userObj.posts))
    localStorage.setItem('following', JSON.stringify(userObj.following))
  }

  return removeKey(userObj, "tokens")
}