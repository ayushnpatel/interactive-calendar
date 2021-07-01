import React, {useState, useEffect} from 'react'

function Cell(props){
    const {date, color, day, map, setMap} = props;
    const [currentValue, changeCurrentValue] = useState(map.has(date.getTime()) ? map.get(date.getTime()): "");
    function valueChange(event){
        changeCurrentValue(event.target.value);
    }
    useEffect(
        () => {
            changeCurrentValue(map.has(date.getTime()) ? map.get(date.getTime()): "");
        },
        [date.getTime()],
    );
    useEffect(
        () => {
            if(!(currentValue === ""))  setMap(new Map([...new Map(map.set(date.getTime(), currentValue))].sort()));
            if(currentValue === ""){
                map.delete(date.getTime())
                setMap(new Map(map))
            } 
        },[currentValue]
    );
    return(
        <td>
            <div className="Cell" style={{backgroundColor:color}}>
                <div className="cell-day">{day}</div>
                <input className="input-text" type="text" value={currentValue} onChange={valueChange}style={{background:'transparent', border:'transparent'}}></input>
            </div>
        </td>
    )
}

export default Cell;