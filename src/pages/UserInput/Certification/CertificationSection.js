import React, { useState, useEffect } from 'react';
import { SortableElement } from 'react-sortable-hoc'

import InputContainer from "../InputContainer";
import arrowDown from '../../../assets/images/arrowDownG.svg';
import group from '../../../assets/images/group.svg';
import eye from '../../../assets/images/Eye.svg';
import Delete from '../../../assets/images/delete.svg';
import {styles} from '../containerStyles'

const CertificationSection = ({value, onArrayChange,onExperienceDelete, setDisabled, disabled, data}) => {
    const [index, setIndex] = useState(-1)
    const [changedIndex, setChangedIndex] = useState(false)
    const Certification = value
  
    useEffect(() => {
      data.Certification.filter(function(values, indexs, arr){ 
        if(values.id === value.id){
          setIndex(indexs)
          setChangedIndex(true)
        }
      })
    }, [])

    const [showInputs, setShowInputs] = useState(false)
    const [showMove, setShowMove] = useState(false)
    
    let SetPresentValue = Certification.endDate === "present" ? true : false
    
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
            <div style={{display:"flex"}} 
                
            >
                {showMove && <img alt="" src={group}  style={styles.moveIcon}/>}
                <div style={styles.subConainer}>
                    <div style={showInputs ? styles.date2 : styles.date} onMouseEnter={() => enableDrag()}>
                        <p style={styles.work}>{Certification.title} at {Certification.company} </p>
                        <p style={styles.date2}>{Certification.year}</p>
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
                    <button onClick={() => {onExperienceDelete(index, data.Certification, "Certification")}} style={styles.button}>
                        <img alt="" src={Delete}  style={styles.img}/>
                    </button>
                    <img alt="" src={eye} style={styles.img} />
                </div>
            </div>
            {   showInputs &&
                <div>
                    <div className='flex space inputRow'>
                        <InputContainer 
                            title="Certification Title" 
                            onChange={onArrayChange} 
                            value={Certification.title} 
                            arrays={data.Certification} 
                            index={index}
                            arrayName="Certification" 
                            name="title"
                        />
                        <InputContainer 
                            title="Certification Year" 
                            onChange={onArrayChange} 
                            value={Certification.year} 
                            index={index}
                            arrays={data.Certification} 
                            arrayName="Certification" 
                            name="year"
                        />

                    </div>
                    
                    <InputContainer 
                        title="Certification Link" 
                        large={true} 
                        onChange={onArrayChange} 
                        value={Certification.website} 
                        index={index}
                        arrays={data.Certification} 
                        arrayName="Certification" 
                        name="website"
                    />
                    <InputContainer 
                        title="Certification Organization" 
                        large={true} 
                        onChange={onArrayChange} 
                        value={Certification.company} 
                        index={index}
                        arrays={data.Certification} 
                        arrayName="Certification" 
                        name="company"
                    />
                </div>
            }
      </li>
      )
      : <li></li>
    }
    
export default SortableElement(CertificationSection)

