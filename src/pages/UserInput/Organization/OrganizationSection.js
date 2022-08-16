import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { SortableElement } from 'react-sortable-hoc'

import DateInput from "../DateInput";
import InputContainer from "../InputContainer";
import checkbox from '../../../assets/images/checkbox.svg';
import arrowDown from '../../../assets/images/arrowDownG.svg';
import group from '../../../assets/images/group.svg';
import eye from '../../../assets/images/Eye.svg';
import Delete from '../../../assets/images/delete.svg';
import {styles} from '../containerStyles'

const OrganizationSection = ({value, onArrayChange,onExperienceDelete, setDisabled, disabled, data, setFunctions, values}) => {
    const [index, setIndex] = useState(-1)
    const [changedIndex, setChangedIndex] = useState(false)
    const Organization = value
  
    useEffect(() => {
      data.Organization.filter(function(values, indexs, arr){ 
        if(values.id === value.id){
          setIndex(indexs)
          setChangedIndex(true)
        }
      })
    }, [])

    const [showInputs, setShowInputs] = useState(false)
    const [showMove, setShowMove] = useState(false)
    
    let SetPresentValue = Organization.endDate === "present" ? true : false
    
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
          <div style={{display:"flex"}}  >
            {showMove && <img alt="" src={group}  style={styles.moveIcon}/>}
            <div style={styles.subConainer}>
                <div style={showInputs ? styles.date2 : styles.date} onMouseEnter={() => enableDrag()}>
                    <p style={styles.work}>{Organization.position} at {Organization.name} </p>
                    <p style={styles.date2}>{Organization.startDate} - {Organization.endDate}</p>
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
                <button onClick={() => {onExperienceDelete(index, data.Organization, "Organization")}} style={styles.button}>
                    <img alt="" src={Delete}  style={styles.img}/>
                </button>
                <img alt="" src={eye} style={styles.img} />
            </div>
          </div>
          {   showInputs &&
            <div>
                <div className='flex space inputRow'>
                    <InputContainer 
                        title="Organization" 
                        onChange={onArrayChange} 
                        value={Organization.name} 
                        arrays={Organization} 
                        index={index}
                        arrayName="Organization" 
                        name="name"
                        setFunctions={setFunctions}
                        values={values}
                    />
                    <InputContainer 
                        title="Position" 
                        onChange={onArrayChange} 
                        value={Organization.position} 
                        index={index}
                        arrays={Organization} 
                        arrayName="Organization" 
                        name="position"
                        setFunctions={setFunctions}
                        values={values}
                    />
            </div>
                <InputContainer 
                    title="Sector" 
                    large={true} 
                    onChange={onArrayChange} 
                    value={Organization.sector} 
                    index={index}
                    arrays={Organization} 
                    arrayName="Organization" 
                    name="sector"
                    setFunctions={setFunctions}
                    values={values}
                />
                <DateInput 
                    title="Start & End Date"  
                    onChange={onArrayChange}
                    index={index}
                    arrays={Organization} 
                    startDate={Organization.startDate}
                    endDate={Organization.endDate}
                    arrayName="Organization" 
                    present={present}
                    setPresent={setPresent}
                    setFunctions={setFunctions}
                    values={values}
                />
                <p className='flex inputRow' onClick={() => setPresent(!present)}>
                    {present ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                    I am currently working here 
                </p>
            </div>
          }
      </li>
  )
  : <li></li>
}

export default SortableElement(OrganizationSection)

