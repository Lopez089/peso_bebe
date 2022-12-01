import React from 'react'
import { weight } from "../../interfaces/index"
import { DateTime } from "luxon";

export const Weight = ({ weight, date, growthInterval }: weight) => {

    const dateFormatter = DateTime.fromISO(date).toFormat('D');

    return (
        <div >
            <div>
                <h5>{weight}</h5>
                <p>{dateFormatter}</p>
            </div>
            {
                growthInterval ? (
                    <div>
                        <h3>interval</h3>
                        {
                            growthInterval < 0 ? <p className='text-red-500'>{growthInterval}</p> : <p className='text-green-500'>{growthInterval}</p>
                        }

                    </div>
                ) : null
            }

            <hr />
        </div >
    )
}