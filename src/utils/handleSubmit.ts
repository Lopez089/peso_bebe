import { weight, TUser } from '../interfaces/index'
import { v4 as uuidv4 } from 'uuid';
import { weightPost } from '../utils/index'
import { action } from '../App'

export const handleSubmit = (
    e: React.FormEvent<HTMLInputElement>,
    weight: weight[],
    weightChange: string,
    user: TUser,
    dispatch
) => {
    e.preventDefault()

    const date: string = new Date().toString()

    let growthInterval


    if (weight.length == 0) {
        growthInterval = Number(weightChange) - user.birthWeight
    }

    if (weight.length > 0) {
        growthInterval = Number(weightChange) - Number(weight[weight.length - 1].weight)
    }

    const newWeight: weight = {
        date,
        id: uuidv4(),
        weight: Number(weightChange),
        idUser: user.idUser,
        growthInterval

    }

    dispatch(action('add_new_weight', newWeight))

    weightPost(newWeight)
}
