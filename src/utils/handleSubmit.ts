import { weight } from '../interfaces/index'
import { v4 as uuidv4 } from 'uuid';
import { weightPost } from '../utils/index'

export const handleSubmit = (
    e: React.FormEvent<HTMLInputElement>,
    setWeights: (state: weight[]) => weight[],
    idUser: number,
    weightChange: string,

) => {

    e.preventDefault()

    const date: string = new Date().toString()

    const newWeight: weight = {
        date,
        id: uuidv4(),
        weight: Number(weightChange),
        idUser
    }
    setWeights((prevState: weight[]) => {
        prevState.concat(newWeight)
        const newState = [...prevState, newWeight]
        return [...newState]
    })

    weightPost(newWeight)
}