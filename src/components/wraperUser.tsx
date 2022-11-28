import { useContext } from 'react'
import { context } from '../context/store'
import { Weight } from '../components/index'
import { wraperUserProp } from '../interfaces/index'


export const WraperUser = () => {
    const [state, dispatch] = useContext(context)

    return (
        <>
            <h1>{state.user.name}</h1>
            <Weight weight={state.user.birthWeight} date={state.user.birthday} />
            {
                state.weights.map(({ weight, date, id, growthInterval }) => {
                    return (
                        <Weight weight={weight} date={date} id={id} key={id} growthInterval={growthInterval} />
                    )
                })
            }
        </>
    )
}