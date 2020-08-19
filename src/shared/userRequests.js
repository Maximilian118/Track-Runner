import axios from 'axios'
import { logInSuccess } from './localStorage'
import { useTokens, populatedUser } from './utility'

export const createUser = (form, user, setUser, setLoading) => {
  setLoading(true)

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
      process.env.NODE_ENV === 'development' && console.log(`createUser: ${res.data.errors[0].message}`)
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
    setLoading(false)
  }).catch(err => {
    process.env.NODE_ENV === 'development' && console.log(`createUser: ${err.response.data.errors[0].message}`)
    setLoading(false)
  })
}

export const login = (form, user, setUser, setLoading, history) => {
  setLoading(true)

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
      process.env.NODE_ENV === 'development' && console.log(`login: ${res.data.errors[0].message}`)
    } else {
      setUser(logInSuccess({
        ...res.data.data.login,
        token: useTokens(res.data.data.login.tokens, user),
        calendar: res.data.data.login.calendar ? res.data.data.login.calendar : user.calendar,
      }))

      history.push("/")
      process.env.NODE_ENV === 'development' && console.log(res)
    }
    setLoading(false)
  }).catch(err => {
    process.env.NODE_ENV === 'development' && console.log(`login: ${err.response.data.errors[0].message}`)
    setLoading(false)
  })
}