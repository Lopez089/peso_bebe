import { useEffect, useState } from 'react'
import { TUser, weight } from '../interfaces/index'
import { getUserWeight, getUser } from '../utils/index'


export const useUser = () => {
    const [weights, setWeights] = useState<weight[] | never>([])
    const [user, setUser] = useState<TUser | null>(null)
    const [newWeight, setNewWeight] = useState('')

    useEffect(() => {
        getUser(2312324524234, setUser)
    }, [])

    useEffect(() => {
        if (user) getUserWeight(user.id, setWeights)
    }, [user])

    return [weights, newWeight, setNewWeight, setWeights, user]
}