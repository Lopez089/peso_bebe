import { handleSubmit, handleChange } from '../utils/index'

export const FormWeight = ({ setWeights, newWeight, setNewWeight, user, weight, setgrowthInterval }) => {
    return (

        <div>
            <form onSubmit={(e: Event) => handleSubmit(e, setWeights, user.id, newWeight, weight, user, setgrowthInterval)}>
                <div>
                    <label htmlFor="peso">Peso</label>
                    <br />
                    <input
                        type='number'
                        id='peso'
                        name='peso'
                        step="any"
                        onChange={(e => handleChange(e, setNewWeight))} />
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
