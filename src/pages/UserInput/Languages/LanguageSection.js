import React, { useState, useEffect } from 'react';
import { SortableElement } from 'react-sortable-hoc'

import DateInput from "../DateInput"; 
import InputContainer from "../InputContainer";
import checkbox from '../../../assets/images/checkbox.svg';
import arrowDown from '../../../assets/images/arrowDownG.svg';
import group from '../../../assets/images/group.svg';
import eye from '../../../assets/images/Eye.svg';
import Delete from '../../../assets/images/delete.svg';
import {styles} from '../containerStyles'


const styles2 = {
  subConainer:{
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  moveIcon: {
    cursor: "move",
    marginLeft:" -10px",
    marginRight: "10px"
  }
}

const LanguageSection = ({value, onArrayChange, setDisabled, disabled, data, values, setFunctions}) => {

    const [index, setIndex] = useState(-1)
    const [changedIndex, setChangedIndex] = useState(false)
    const Language = value
  
    useEffect(() => {
      data.Language.filter(function(values, indexs, arr){ 
        if(values.id === value.id){
          setIndex(indexs)
          setChangedIndex(true)
        }
      })
    }, [])

    const [showInputs, setShowInputs] = useState(false)
    const [showMove, setShowMove] = useState(false)
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
    
    return (
        <li 
        style={styles.container}
        onMouseEnter={() => {mouseEnter()}}
        onMouseLeave={() => {mouseLeave()}} 
        >
            <div style={{display:"flex"}} 
                
            >
                <div style={styles2.subConainer}>

                    <div style={showInputs ? styles.date2 : styles.date} onMouseEnter={() => enableDrag()}>
                  <img alt="" src={group}  style={styles2.moveIcon}/>

                    </div>
                    <div onMouseEnter={() => disableDrag()}>
                    </div>
                
                    <InputContainer 
                        title="Language" 
                        onChange={onArrayChange} 
                        value={Language.language} 
                        arrays={Language} 
                        arrayName="Language" 
                        name="language"
                        index={index}
                        values={values}
                        setFunctions={setFunctions}
                    />
                    <InputContainer 
                        title="Level" 
                        onChange={onArrayChange} 
                        value={Language.level} 
                        arrays={Language} 
                        arrayName="Language" 
                        name="level"
                        values={values}
                        index={index}
                        setFunctions={setFunctions}
                    />
                
                </div>
            </div>
       </li>
    )
}

export default SortableElement(LanguageSection)
