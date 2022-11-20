import { useEffect, useState } from 'react'
import { TUser, weight } from './interfaces/index'
import './App.css'
import { getUserWeight, getUser } from './utils/index'

function App() {
  const [weights, setWeights] = useState<weight[] | never>([])
  const [user, setUser] = useState<TUser | null>(null)

  useEffect(() => {
    getUser(2312324524234, setUser)
  }, [])

  useEffect(() => {
    if (user) getUserWeight(user.id, setWeights)
  }, [user])

  return (
    <div className="App">
      {
        user ? <h1>{user.name}</h1> : null
      }
      {
        weights.map((weight) => (
          <h5 key={weight.id}>{weight.weight}</h5>
        )
        )
      }
    </div>
  )
}

export default App
