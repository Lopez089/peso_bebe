import axios from 'axios'
import { weight } from '../interfaces/index'

export const weightPost = (newWeight: weight) => {
    axios.post('http://localhost:3000/weights', newWeight)
        .then(res => console.info(res))
        .catch(err => console.error(err))
}