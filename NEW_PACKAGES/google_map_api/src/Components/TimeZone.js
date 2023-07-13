/**
 * The `TimeZone` component displays the current time in different time zones based on user selection
 * and updates every second.
 * 
 * @return The `TimeZone` component is being returned, which renders a select dropdown with options for
 * different time zones and displays the current time in the selected time zone and the local time.
 */
/**
 * The function displays the current time in different time zones based on user selection and updates
 * every second.
 * 
 * @return The `TimeZone` component is being returned, which renders a select dropdown with options for
 * different time zones and displays the current time in the selected time zone and the local time.
 */
import React, { useEffect, useState } from 'react';
import { CountryTimeZone } from './ConstantsThings';


export const TimeZone = () => {
    const [timing, setTiming] = useState();
    const [timingOnly, setTimingOnly] = useState();
    const setTime = (e) => {
        const time = new Date().toLocaleString("en-NZ", { timeZone: `${e}`, timeZoneName: 'short' });
        setTiming(time)
    }

    useEffect(() => {
        setTimingonly()
    }, [])
    const setTimingonly = () => {
        const time = new Date().toLocaleString()
        setTimingOnly(time)
        refressh()
        console.log(time)
    }


    const refressh = () => {
        setTimeout(() => {
            setTimingonly()
        }, 1000);
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <select onChange={(e) => setTime(e.target.value)} className='form-control'>
                                {
                                    CountryTimeZone.map((i) => {
                                        return <option key={i} value={i}>{i}</option>
                                    })
                                }

                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{timing}</h1>
                            {timingOnly}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
