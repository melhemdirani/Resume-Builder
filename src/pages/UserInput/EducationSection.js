import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { SortableElement } from 'react-sortable-hoc'

import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';
import arrowDown from '../../assets/images/arrowDownG.svg';
import group from '../../assets/images/group.svg';
import eye from '../../assets/images/Eye.svg';
import Delete from '../../assets/images/delete.svg';
import TipEditor from './TipEditor';
import {styles} from './containerStyles'

const EducationSection = ({value, onArrayChange,onExperienceDelete, setDisabled, disabled, data, values, setFunctions}) => {
    const [index, setIndex] = useState(-1)
    const [changedIndex, setChangedIndex] = useState(false)
    const Education= value
  
    useEffect(() => {
      data.Education.filter(function(values, indexs, arr){ 
        if(values.id === value.id){
          setIndex(indexs)
          setChangedIndex(true)
        }
      })
    }, [])

    useEffect(() => {
        console.log("index here", index)
    }, [index])


    
    const [showInputs, setShowInputs] = useState(false)
    const [showMove, setShowMove] = useState(false)
    
    let SetPresentValue = Education.endDate === "present" ? true : false
    
    const [present, setPresent] = useState(SetPresentValue)
    const onArrowClick = () => {
      setShowInputs(!showInputs)
    }
  
      
    const mouseEnter = () => {
      if(!showMove){
        setShowMove(true)
      }
      else return
    }
    const mouseLeave = () => {
      if(showMove & !showInputs){
        setShowMove(false)
      }
      else return
    }
  
    const [descriptionHtml, setDescriptionHtml] = useState(Education.description)
    const [summaryExpand, setSummaryExpand] = useState(false)
  
    const disableDrag = () => {
      if(!disabled){
        setDisabled(true)
      }
    }
    const enableDrag = () => {
      if(!disabled && !showInputs){
        setDisabled(false)
      }
    }
    
  
    return changedIndex  && index !== -1 ? (
        <li 
        style={styles.container}
        onMouseEnter={() => {mouseEnter()}}
        onMouseLeave={() => {mouseLeave()}} 
        >
            <div style={{display:"flex"}} 
            
            >
              {showMove && <img alt="" src={group}  style={styles.moveIcon}/>}
              <div style={styles.subConainer}>
                  <div style={showInputs ? styles.date2 : styles.date} onMouseEnter={() => enableDrag()}>
                      <p style={styles.work}>{Education.title} at {Education.university} </p>
                      <p style={styles.date2}>{Education.startDate} - {Education.endDate}</p>
                  </div>
                  <div onMouseEnter={() => disableDrag()}>
                    <img 
                      alt="" 
                      src={arrowDown} 
                      onClick={() => {onArrowClick()}} 
                      style={styles.arrow}
                    />
                  </div>
                 
              </div>
              <div style={styles.groupedImages} onMouseEnter={() => disableDrag()}>
                  <button onClick={() => {onExperienceDelete(index, data.Education, "Education")}} style={styles.button}>
                      <img alt="" src={Delete}  style={styles.img}/>
                  </button>
                  <img alt="" src={eye} style={styles.img} />
              </div>
            </div>
            {   showInputs && 
                <div>
                    <InputContainer 
                    title="School Name" 
                    large={true} 
                    onChange={onArrayChange} 
                    value={Education.university} 
                    arrays={Education} 
                    index={index}
                    arrayName="Education" 
                    name="university" 
                    setFunctions={setFunctions}
                    values={values}
                    />
                    <div className='flex space inputRow'>
                        <InputContainer 
                        title="Degree" 
                        onChange={onArrayChange} 
                        value={Education.title} 
                        index={index}
                        arrays={Education} 
                        arrayName="Education" 
                        setFunctions={setFunctions}
                        values={values}
                        name="title" 
                        />
                        <InputContainer 
                        title="Field Of Study" 
                        onChange={onArrayChange} 
                        value={Education.field} 
                        index={index}
                        arrays={Education} 
                        arrayName="Education" 
                        setFunctions={setFunctions}
                        values={values}
                        name="field" 
                        />
                    </div>
                    <div className='flex space inputRow'>
                        <InputContainer 
                        title="Cumulative Grade Point Average" 
                        onChange={onArrayChange} 
                        value={Education.CGPA} 
                        index={index}
                        arrays={Education} 
                        arrayName="Education" 
                        name="CGPA" 
                        setFunctions={setFunctions}
                        values={values}
                        />
                        <InputContainer 
                        title="Max Average" 
                        onChange={onArrayChange} 
                        value={Education.CGPAMax} 
                        index={index}
                        arrays={Education} 
                        arrayName="Education"  
                        name="CGPAMax" 
                        setFunctions={setFunctions}
                        values={values}
                        />
                    </div>
                    <DateInput 
                        title="Start & End Date"
                        onChange={onArrayChange}
                        index={index}
                        present={present}
                        setPresent={setPresent}
                        arrays={Education} 
                        startDate={Education.startDate}
                        endDate={Education.endDate}
                        arrayName="Education" 
                        setFunctions={setFunctions}
                        values={values}
                    />
              
                    <p className='flex inputRow' onClick={() => setPresent(!present)}>
                        {present ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                        I am currently studying here 
                    </p>
                </div>
            }
        </li>
    )
    : <li></li>
}

export default SortableElement(EducationSection)
