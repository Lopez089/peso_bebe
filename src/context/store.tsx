import { createContext, useReducer } from 'react';

const initialState = {
    weights: [], user: {}
}

export const context = createContext(null)

export const Store = ({ children }) => {

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'initial_state_weight':
                return { ...state, weights: action.payload }
            case 'initial_state_user':
                return { ...state, user: action.payload }
            case 'add_new_weight':
                return { ...state, weights: state.weights.concat(action.payload) }
            default:
                return state
        }
    }, initialState)

    return (
        <context.Provider value={[state, dispatch]}>
            {children}
        </context.Provider>
    )

}
