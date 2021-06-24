import axios from 'axios'
import { logInSuccess, logout } from './localStorage'
import { useTokens, populatedUser, headers } from './utility'

export const createUser = (form, user, setUser, setLocalLoading, setBackendError) => {
  setLocalLoading(true)

  axios.post('', {
    variables: {
      name: form.name,
      email: form.email,
      password: form.password,
      passConfirm: form.passConfirm,
    },
    query: `
      mutation CreateUser($name: String!, $email: String!, $password: String!, $passConfirm: String!) {
        createUser(userInput: {name: $name, email: $email, password: $password, pass_confirm: $passConfirm}) {
          _id
          tokens
          name
          email
        }
      }
    `
  }).then(async (res) => {
    if (res.data.errors) {
      process.env.NODE_ENV === 'development' && console.log(res.data.errors[0].message)
    } else {
      setUser(logInSuccess({
        ...res.data.data.createUser,
        token: useTokens(res.data.data.createUser.tokens, user),
        profile_picture: "",
        posts: [],
        following: [],
        calendar: user.calendar,
      }))

      process.env.NODE_ENV === 'development' && console.log(res)
    }

  }).catch(err => {
    process.env.NODE_ENV === 'development' && console.log(JSON.parse(err.response.data.errors[0].message))
    setBackendError(JSON.parse(err.response.data.errors[0].message))
    setLocalLoading(false)
  })
}

export const login = (form, user, setUser, setLocalLoading, setBackendError, history) => {
  setLocalLoading(true)

  axios.post('', {
    variables: {
      email: form.email,
      password: form.password,
    },
    query: `
      query Login($email: String!, $password: String) {
        login(email: $email, password: $password) {
          ${populatedUser}
        }
      }
    `
  }).then(res => {
    if (res.data.errors) {
      process.env.NODE_ENV === 'development' && console.log(res.data.errors[0].message)
    } else {
      setUser(logInSuccess({
        ...res.data.data.login,
        token: useTokens(res.data.data.login.tokens, user),
        calendar: res.data.data.login.calendar ? res.data.data.login.calendar : user.calendar,
      }))

      history.push("/")
      process.env.NODE_ENV === 'development' && console.log(res)
    }

  }).catch(err => {
    process.env.NODE_ENV === 'development' && console.log(JSON.parse(err.response.data.errors[0].message))
    setBackendError(JSON.parse(err.response.data.errors[0].message))
    setLocalLoading(false)
  })
}

export const deleteUser = (user, setUser, setLoading, history) => {
  setLoading(true)

  axios.post('', {
    variables: {
      _id: user._id,
    },
    query: `
      mutation DeleteUser($_id: String!) {
        deleteUser(_id: $_id) {
          _id
        }
      }
    `
  }, {headers: headers(user.token)}).then(res => {
    if (res.data.errors) {
      process.env.NODE_ENV === 'development' && console.log(res.data.errors[0].message)
    } else {
      setUser(logout())

      history.push("/")
      process.env.NODE_ENV === 'development' && console.log(res)
    }

    setLoading(false)
  }).catch(err => {
    process.env.NODE_ENV === 'development' && console.log(err)
    setLoading(false)
  })
}