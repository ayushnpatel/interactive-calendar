import React, {useState} from "react";
import { storiesOf } from "@storybook/react";

import { Calendar } from '../components/Calendar/'
import { Graph } from '../components/Graph/'

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    const [map, setMap] = useState(new Map());
    return (<>
            <Calendar map={map} setMap={setMap}/>
            {map.size > 0 && <Graph map={map} pointIdentifier="Weight"></Graph>}
            </>);
});