import { weight, TUser } from '../interfaces/index'
import { v4 as uuidv4 } from 'uuid';
import { weightPost } from '../utils/index'

export const handleSubmit = (
    e: React.FormEvent<HTMLInputElement>,
    setWeights: (state: weight[]) => weight[],
    idUser: number,
    weightChange: string,
    weight: weight[],
    user: TUser,
    setgrowthInterval
) => {

    e.preventDefault()

    const date: string = new Date().toString()

    // 
    let growthInterval


    if (weight.length == 0) {
        growthInterval = Number(weightChange) - user.birthWeight
        setgrowthInterval(growthInterval)
    }

    if (weight.length > 0) {
        growthInterval = Number(weightChange) - Number(weight[weight.length - 1].weight)
        setgrowthInterval(growthInterval)
    }


    //
    const newWeight: weight = {
        date,
        id: uuidv4(),
        weight: Number(weightChange),
        idUser,
        growthInterval

    }
    console.log("🚀 ~ file: handleSubmit.ts ~ line 36 ~ newWeight", newWeight)

    setWeights((prevState: weight[]) => {
        prevState.concat(newWeight)
        const newState = [...prevState, newWeight]
        return [...newState]
    })

    weightPost(newWeight)
}