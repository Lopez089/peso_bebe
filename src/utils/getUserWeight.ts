import axios from 'axios'
import { weight, TweightUser } from '../interfaces/index'

export const getUserWeight = (idUser: number, setWeights: (weights: weight[]) => void) => {
    axios.get('http://localhost:3000/weight')
        .then(res => {
            const userData: TweightUser = res.data.find((el: TweightUser) => el.idUser == idUser)
            setWeights(userData.weights)
        })
        .catch(error => console.error(error))
}