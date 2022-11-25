import { weight } from "../interfaces/index"

export const Weight = ({ weight, date, growthInterval }: weight) => {

    return (
        <div >
            <div>
                <h5>{weight}</h5>
                <p>{date}</p>
            </div>
            <div>
                <h3>interval</h3>
                <p>{growthInterval}</p>
            </div>
            <hr />
        </div >
    )
}