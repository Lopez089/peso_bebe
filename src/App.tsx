import { useEffect, useState } from 'react'
import { TUser, weight } from './interfaces/index'
import './App.css'
import { getUserWeight, getUser } from './utils/index'
import { WraperUser, FormWeight } from './components/index'

function App() {
  const [weights, setWeights] = useState<weight[] | never>([])
  const [user, setUser] = useState<TUser | null>(null)
  const [newWeight, setNewWeight] = useState('')

  useEffect(() => {
    getUser(2312324524234, setUser)
  }, [])

  useEffect(() => {
    if (user) getUserWeight(user.id, setWeights)
  }, [user])

  return (
    <div className="App">

      <FormWeight setWeights={setWeights} newWeight={newWeight} setNewWeight={setNewWeight} user={user} />
      {
        user ? <WraperUser user={user} weights={weights} /> : <h2>Error, El usuario no existe</h2>
      }
    </div >
  )
}

export default App
