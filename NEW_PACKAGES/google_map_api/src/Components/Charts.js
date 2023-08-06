import React from 'react';
import { Line } from "react-chartjs-2"
import { lineChartData } from './ConstantsThings';

export const Charts = () => {
    return (
        <div>
            <Line data={lineChartData} />
        </div>
    )
}
