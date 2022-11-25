import { useState } from 'react '
import { WraperUser, FormWeight } from './components/index'
import { useUser } from './hook/index'
import './App.css'

function App() {
  const [weights, newWeight, setNewWeight, setWeights, user] = useUser()
  const [growthInterval, setgrowthInterval] = useState(null)
  console.log("🚀 ~ file: App.tsx ~ line 10 ~ App ~ growthInterval", growthInterval)
  return (
    <div className="App">

      <FormWeight setgrowthInterval={setgrowthInterval} weight={weights} setWeights={setWeights} newWeight={newWeight} setNewWeight={setNewWeight} user={user} />
      {
        user ? <WraperUser user={user} weights={weights} growthInterval={growthInterval} /> : <h2>Error, El usuario no existe</h2>
      }
    </div >
  )
}

export default App
