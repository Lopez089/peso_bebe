import { Weight } from '../components/index'
import { wraperUserProp } from '../interfaces/index'

export const WraperUser = ({ user, weights }: wraperUserProp) => {
    return (
        <>
            <h1>{user.name}</h1>
            <Weight weight={user.birthWeight} date={user.birthday} />
            {
                weights.map(({ weight, date, id }) => {
                    return (
                        <Weight weight={weight} date={date} id={id} key={id} />
                    )
                })
            }
        </>
    )
}