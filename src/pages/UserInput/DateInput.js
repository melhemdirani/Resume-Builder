import React, { useEffect, useState } from 'react';

import dateSeparator from '../../assets/images/dateSeparator.svg';
import calendar from '../../assets/images/Calendar.svg';
import prevYear from '../../assets/images/prevYear.svg';
import nextYear from '../../assets/images/nextYear.svg';
import calendarTop from '../../assets/images/calendarTop.svg';


const Calendar = ({selectedMonth, setSelectedMonth, selectedYear, setSelectedYear, setAlternateCalendar}) => {

    let Months= ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

    const handleMonthClick = (month) => {
        setSelectedMonth(month);
        setAlternateCalendar(false);
    }
    return(
        <div className='Calendar_Container'>
            <img alt="" src={calendarTop} className='top_image'/>
            <div className='row1'>
                <button onClick={() => setSelectedYear(selectedYear - 1 )}>
                    <img alt="" src={prevYear} />
                </button>
                <p> {selectedMonth} {" "} {selectedYear} </p>
                <button onClick={() => setSelectedYear(selectedYear + 1 )}>
                    <img alt="" src={nextYear} />
                </button>
            </div>
            <div className='row2'>
                {
                    Months.map((month,i) =>
                        <p key={i} onClick={() => {handleMonthClick(month)}}> {month} </p>
                    )
                }
            </div>
        </div>
    )
}

const DatePicker = ({title, month, onChange, arrayName, arrays, index, date, present, setPresent, values, setFunctions}) => {

    const [selectedMonth, setSelectedMonth] = useState(`${month}`)
    const [selectedYear, setSelectedYear] = useState(2020)
    const [startRender, setStartRender] = useState(`${date}`)
    const [ focus, setFocus ] = useState(false)
    const [ renderedDate, setRenderedDate] = useState()

    const [alternateCalendar, setAlternateCalendar] = useState(false)

    const handleStartClick = () => {
        if(!focus){
            setFocus(true)
        }
        if(!alternateCalendar){
            setAlternateCalendar(true)
        }
        if(present){
            setPresent(false)
        }
    }

    useEffect(() => {
        let selectedDate = selectedMonth + " " + selectedYear 
        if(startRender !== selectedDate){
            setStartRender(selectedDate)
        }
        let name = title === "Start date" ? "startDate" : "endDate"

        let e ={ target: {name: name, value: selectedDate}}
        if(focus){
            onChange(e, setFunctions, values, index )
        }

    }, [selectedMonth, selectedYear, focus])

    useEffect(() => {
        let selectedDate = present ? "present" : selectedMonth + " " + selectedYear 
        let name = title === "Start date" ? "startDate" : "endDate"
        let e ={ target: {name: name, value: selectedDate}}
        if (present){
            setStartRender("present")
            onChange(e, setFunctions, values, index )

        } else if(focus) {
            setStartRender(selectedDate);
            onChange(e, setFunctions, values, index )
        }
    }, [present])
  


    let src = title === "Start date" ? dateSeparator : calendar


    return(
        <div className='flex date' onClick={handleStartClick}>
            <span>{startRender}</span> 
            <img alt="" src={src} /> 
            { alternateCalendar &&
                <Calendar 
                    selectedMonth={selectedMonth} 
                    setSelectedMonth={setSelectedMonth  } 
                    selectedYear={selectedYear} 
                    setSelectedYear={setSelectedYear} 
                    setAlternateCalendar={setAlternateCalendar}
                />
            }
        </div>
    )
}

export default function DateInput({onChange, arrayName, arrays, index, startDate, endDate, present, setPresent, setFunctions, values}) {
  return (
      <div className='InputContainer input2 inputRow'>
            <label>
                Start & End Date
            </label>
        <div className='input flex space'>
        <DatePicker 
           title="Start date"
           month="May"
           onChange={onChange}
           arrayName={arrayName}
           arrays={arrays}
           date={startDate}
           index={index}
           setFunctions={setFunctions}
           values={values}

        />
        <DatePicker 
            title="End date"
            month="Dec"
            onChange={onChange}
            arrayName={arrayName}
            date={endDate}
            arrays={arrays}
            index={index}
            present={present}
            setPresent={setPresent}
            setFunctions={setFunctions}
            values={values}
        />
        </div>
    </div>

  )
}
                       