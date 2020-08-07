import { logout } from './localStorage'

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
    history.push("/loggedout")
  }
}

// Remove a key: value pair from context.
export const removeKey = (obj, prop) => {
  let {[prop]: omit, ...res} = obj
  return res
}

// User population template literal.
export const populatedUser = `
  _id
  status
  tokens
  name
  email
  profile_picture
  logged_in_at
  posts {
    _id
    img
    title
    description
    created_at
    updated_at
    author {
      _id
      name
      email
      website
      profile_picture
    }
    comments {
      comment
      created_at
      updated_at
      author {
        _id
        name
        profile_picture
      }
    }
  }
  following {
    _id
    name
    email
    profile_picture
    posts {
      _id
      img
      title
      description
      created_at
      updated_at
      author {
        _id
        name
        email
        profile_picture
      }
      comments {
        comment
        created_at
        updated_at
        author {
          _id
          name
          profile_picture
        }
      }
    }
  }
`