import axios from 'axios'
import { weight } from '../interfaces/index'

export const getUserWeight = (idUser: number, setWeights: (weights: weight[]) => void) => {
    axios.get(`http://localhost:3000/weights?idUser=${idUser}`)
        .then(res => {
            setWeights(res.data)
        })
        .catch(error => console.error(error))
}