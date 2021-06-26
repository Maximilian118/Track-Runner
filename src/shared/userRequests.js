import axios from 'axios'
import { logInSuccess, logout } from './localStorage'
import { useTokens, populatedUser, headers, unknownError } from './utility'

export const createUser = async (form, user, setUser, setLocalLoading, setBackendError) => {
  setLocalLoading(true)

  try {
    await axios.post('', {
      variables: {
        name: form.name,
        email: form.email,
        password: form.password,
        passConfirm: form.passConfirm,
      },
      query: `
        mutation CreateUser($name: String!, $email: String!, $password: String!, $passConfirm: String!) {
          createUser(userInput: {name: $name, email: $email, password: $password, pass_confirm: $passConfirm}) {
            ${populatedUser}
          }
        }
      `
    }).then(async (res) => {
      if (res.data.errors) {
        process.env.NODE_ENV === 'development' && console.log(res.data.errors[0].message)
        setLocalLoading(false)
      } else {
        setUser(logInSuccess({
          ...res.data.data.createUser,
          token: useTokens(res.data.data.createUser.tokens, user),
        }))
  
        process.env.NODE_ENV === 'development' && console.log(res)
      }
  
    }).catch(err => {
      process.env.NODE_ENV === 'development' && console.log(JSON.parse(err.response.data.errors[0].message))
      setBackendError(JSON.parse(err.response.data.errors[0].message))
      setLocalLoading(false)
    })
  } catch {
    unknownError(setBackendError, setLocalLoading)
  }
}

export const login = async (form, user, setUser, setLocalLoading, setBackendError, history) => {
  setLocalLoading(true)

  try {
    await axios.post('', {
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
        setLocalLoading(false)
      } else {
        setUser(logInSuccess({
          ...res.data.data.login,
          token: useTokens(res.data.data.login.tokens, user),
        }))
  
        history.push("/")
        process.env.NODE_ENV === 'development' && console.log(res)
      }
  
    }).catch(err => {
      process.env.NODE_ENV === 'development' && console.log(JSON.parse(err.response.data.errors[0].message))
      setBackendError(JSON.parse(err.response.data.errors[0].message))
      setLocalLoading(false)
    })
  } catch {
    unknownError(setBackendError, setLocalLoading)
  }
}

export const forgot = async (email, setLocalLoading, setBackendError, histroy) => {
  setLocalLoading(true)

  try {
    await axios.post('', {
      variables: {
        email: email,
      },
      query: `
        mutation Forgot($email: String!) {
          forgot(email: $email) {
            _id
          }
        }
      `
    }).then(res => {
      if (res.data.errors) {
        process.env.NODE_ENV === 'development' && console.log(res.data.errors[0].message)
      } else {
        process.env.NODE_ENV === 'development' && console.log(res)
      }
  
      setLocalLoading(false)
      histroy.push("/forgot-success")
    }).catch(err => {
      process.env.NODE_ENV === 'development' && console.log(err)
      setBackendError(JSON.parse(err.response.data.errors[0].message))
      setLocalLoading(false)
    })
  } catch {
    unknownError(setBackendError, setLocalLoading)
  }
}

export const deleteUser = async (user, setUser, setLoading, history) => {
  setLoading(true)

  try {
    await axios.post('', {
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
  } catch {
    console.log("something went wrong!")
    setLoading(false)
  }
}