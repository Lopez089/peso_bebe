import React, { createContext } from 'react';
import { useUser } from '../hook/index'


export const Context = createContext(null)

export const Store = ({ children }) => {
    const [weights, user] = useUser()

    const initialState = {
        weights, user
    }
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )

}
