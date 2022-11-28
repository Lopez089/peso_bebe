import { useState, useContext } from 'react'
import { handleSubmit, handleChange } from '../utils/index'
import { context } from '../context/store'
export const FormWeight = () => {
    const [weightChange, setWeightChange] = useState('')
    const [state, dispath] = useContext(context)

    return (

        <div>
            <form onSubmit={(e: Event) => handleSubmit(e, state.weights, weightChange, state.user, dispath)}>
                <div>
                    <label htmlFor="peso">Peso</label>
                    <br />
                    <input
                        type='number'
                        id='peso'
                        name='peso'
                        step="any"
                        onChange={(e => handleChange(e, setWeightChange))} />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
