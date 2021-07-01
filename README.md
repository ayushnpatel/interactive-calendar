
# React Interactive Calendar synced with React Frappe Charts Graph

## Installation

    npm install --save mapped-calendar-graph

## Usage

    import React, { useState } from 'react'
    import { Calendar } from 'mapped-calendar-graph'
    import { Graph } from 'mapped-calendar-graph'

    export default function MyChart(props) {
        const [map, setMap] = useState(new Map());
        return (
            <div>
                <Calendar map={map} setMap={setMap}></Calendar>
                {map.size > 0 && <Graph map={map}></Graph>}
            </div>
        );
    }


![](interactive-calendar-gif.gif)
