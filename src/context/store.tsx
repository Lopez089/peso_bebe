import React, { createContext } from 'react';

const initialState = {
    contador: 300
}

export const Context = createContext(initialState)

export const Store = ({ children }) => {
    return (
        <Context.Provider value={initialState}>
            {children}
        </Context.Provider>
    )

}
