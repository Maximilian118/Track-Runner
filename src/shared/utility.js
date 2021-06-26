import { logout } from './localStorage'
import moment from 'moment'

// Format moment().format() to date for calendar display.
export const formatDate = date => {
  if (moment(date).format("D") === "1") {
    return moment(date).format("MMM D")
  } else {
    return moment(date).format("D")
  }
}

// Remove a key: value pair from context.
export const removeKey = (obj, prop) => {
  let {[prop]: omit, ...res} = obj
  return res
}

// If req res has tokens, use them. If not, return current token.
export const useTokens = (tokens, user) => {
  if (tokens) {
    const parsedTokens = JSON.parse(tokens)
    localStorage.setItem("token", parsedTokens.access_token)
    localStorage.setItem("refresh_token", parsedTokens.refresh_token)
    return parsedTokens.access_token
  } else {
    return user.token
  }
}

// Add headers to a request
export const headers = token => {
  const refreshToken = localStorage.getItem("refresh_token")
  return {
    "Content-Type": "application/json",
    accessToken: `Bearer ${token}`,
    refreshToken: `Bearer ${refreshToken}`,
  }
}

// If no authentication, logout and redirect.
export const checkAuth = (res, setUser, history) => {
  if (res.data.errors[0].message === "Not Authenticated!") {
    setUser(logout())
    history.push("/")
  }
}

// Get the initials of the user.
export const getInitials = user => {
  let names = user.name.split(' '),
    initials = names[0].substring(0, 1).toUpperCase()
  
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }
  return initials
}

// User population template literal.
export const populatedUser = `
  _id
  tokens
  name
  email
  profile_picture
  events {
    _id
    title
    description
    startDate
    endDate
    img
    participants {
      _id
      name
      profile_picture
    }
  }
  posts {
    _id
    title
    description
    img
    created_at
    updated_at
    author {
      _id
      name
      profile_picture
    }
  }
  following {
    name
    email
    profile_picture
    posts {
      _id
      title
      description
      img
      created_at
      updated_at
      author {
        _id
        name
        profile_picture
      }
    }
  }
`