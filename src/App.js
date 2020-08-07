import React, {useState} from 'react'
import './scss/base.scss'
import './scss/_model.scss'
import Router from './Router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { checkLocalStorage } from './shared/localStorage'
import Spinner from './components/Spinner'

const Context = React.createContext()

const App = () => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(checkLocalStorage())

  // If in develop mode, console log every time any state used in context is mutated. 
  process.env.NODE_ENV === 'development' && console.log({loading, user})

  return (
    <Context.Provider value={{loading, setLoading, user, setUser}}>
      <Nav user={user}/>
      <main>
        {loading ? <Spinner/> : <Router/>}
      </main>
      <Footer/>
    </Context.Provider>
  )
}

export default App
export {Context}