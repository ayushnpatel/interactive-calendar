import React, {useState} from 'react'
import '../stylesheets/interactive-calendar.css';
import Cell from '../Cell/Cell.js'

export function Calendar(props){
    const weekday = new Array(7);
    weekday[0] = "Sunday"; weekday[1] = "Monday"; weekday[2] = "Tuesday"; weekday[3] = "Wednesday";weekday[4] = "Thursday";weekday[5] = "Friday"; weekday[6] = "Saturday";
    const months = new Array(12);
    months[0] = "January"; months[1] = "February"; months[2] = "March"; months[3] = "April"; months[4] = "May"; months[5] = "June"; months[6] = "July"; months[7] = "August"; months[8] = "September"; months[9] = "October"; months[10] = "November"; months[11] = "December";
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    function renderCalendar(){
        let key=0;
        const monthMaxDays = new Date(currentYear, currentMonth+1, 0).getDate();
        let calendarCells = [];
        const prevMonthMaxDays = new Date(currentYear, currentMonth, 0).getDate();
        for(let i = weekday.indexOf(new Date(currentYear, currentMonth%12, 1).toLocaleString('en-us', {  weekday: 'long' }))-1; i >=0 ; i--){
            calendarCells.push(<Cell key={key++} map={props.map} setMap={props.setMap} date={new Date(currentYear, currentMonth-1, prevMonthMaxDays-i)} day={prevMonthMaxDays-i} color='rgb(255, 200, 221)'></Cell>);
        }
        for(let i = 1; i <= monthMaxDays; i++){
            calendarCells.push(<Cell key={key++} map={props.map} setMap={props.setMap} date={new Date(currentYear, currentMonth, i)} day={i} color='rgb(189, 224, 254)'></Cell>)
        }
        let currentLength = calendarCells.length;
        for(let i = 1; i <= 42 - currentLength; i++){
            calendarCells.push(<Cell key={key++} map={props.map} setMap={props.setMap} date={new Date(currentYear, currentMonth, monthMaxDays+i)} day={i} color='rgb(255, 200, 221)'></Cell>)
        }
        const calendar = chunk(calendarCells, 7).map(arr => <tr key={key++}>{arr}</tr> ); 
        return calendar;
    }
    function chunk(arr, chunkSize) {
        var R = [];
        for (var i=0,len=arr.length; i<len; i+=chunkSize)
          R.push(arr.slice(i,i+chunkSize));
        return R;
    }
    return(
        <div className="calendar-wrap">
            <div className="calendar">
                <div id="button-info-container">
                    <button className="movement-button" onClick={() => {
                        setCurrentMonth(new Date(currentYear, currentMonth, 0).getMonth())
                        setCurrentYear(currentMonth === 0 ? currentYear-1 : currentYear);
                    }}>Prev</button>
                    <button className="movement-button" onClick={() => {
                        setCurrentMonth(new Date(currentYear, currentMonth+2, 0).getMonth())
                        setCurrentYear(currentMonth === 11 ? currentYear+1 : currentYear);
                    }}>Next</button>
                    <div className="month-year-text">{months[currentMonth%12]}  {currentYear}</div>
                </div>
                <table id="dataTable">
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tues</th>
                            <th>Wed</th>
                            <th>Thurs</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCalendar()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
