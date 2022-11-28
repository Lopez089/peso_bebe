import axios from 'axios'
import { TUser } from '../interfaces/index'

export const getUser = (id: number,) => {
    axios.get('http://localhost:3000/users')
        .then(res => {
            const user = res.data.find((user: TUser) => user.id === id)
            return user
        })
        .catch(err => console.error(err))
}