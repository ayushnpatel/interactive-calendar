import React, { useEffect, useState } from 'react';
import ReactFrappeChart from 'react-frappe-charts';


export function Graph(props){
    const {map, pointIdentifier} = props;

    console.log(pointIdentifier);

    return(
        <div className="graph-container">
            <div className="graph">
                <ReactFrappeChart
                type="line"
                colors={["#CDB4DB"]}
                axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
                height={200}
                data={{
                    labels: Array.from(map.keys()).map((time) => new Date(time).toDateString()),
                    datasets: [{name: pointIdentifier, type:"line", values: Array.from(map.values()).map((value) => parseFloat(value)) }]
                }} />
            </div>
        </div>
        
    )
}
