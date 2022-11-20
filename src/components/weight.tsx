import { weight } from "../interfaces/index"

export const Weight = ({ weight, date }: weight) => {

    return (
        <div >
            <h5>{weight}</h5>
            <p>{date}</p>
            <hr />
        </div >
    )
}