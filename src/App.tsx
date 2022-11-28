import { useState, useContext, useEffect } from 'react '
import { context } from './context/store'
import { WraperUser, FormWeight } from './components/index'
import { useUser } from './hook/index'
import './App.css'
import { getUserWeight, getUser } from './utils/index'
import { TUser } from './interfaces/index'
import axios from 'axios'

export const action = (type: string, payload: any) => {
  return {
    type,
    payload
  }
}

function App() {
  // TODO:delete all
  const [weights, newWeight, setNewWeight, setWeights] = useUser()
  const [growthInterval, setgrowthInterval] = useState(null)
  //

  const [state, dispatch] = useContext(context)

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => {
        const user = res.data.find((user: TUser) => user.id === 2312324524234)
        dispatch(action('initial_state_user', user))
      })
      .catch(err => console.error(err))

  }, [])

  useEffect(() => {
    axios.get(`http://localhost:3000/weights?idUser=${state.user.id}`)
      .then(res => {
        dispatch(action('initial_state_weight', res.data))
      })
      .catch(error => console.error(error))
  }, [state.user])

  return (
    <div className="App">

      <FormWeight />
      {
        state.user ? <WraperUser /> : <h2>Error, El usuario no existe</h2>
      }
    </div >
  )
}

export default App
