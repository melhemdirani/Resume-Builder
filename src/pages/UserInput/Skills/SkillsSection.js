import React, { useState, useEffect } from 'react';
import { SortableElement } from 'react-sortable-hoc'

import InputContainer from "../InputContainer";
import group from '../../../assets/images/group.svg';
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

const SkillsSection = ({value, onArrayChange, setDisabled, disabled, data, values, setFunctions}) => {

    const [index, setIndex] = useState(-1)
    const [changedIndex, setChangedIndex] = useState(false)
    const Skills = value
  
    useEffect(() => {
      data.Skills.filter(function(values, indexs, arr){ 
        if(values.id === value.id){
          setIndex(indexs)
          setChangedIndex(true)
        }
      })
    }, [])

    const [showInputs, setShowInputs] = useState(false)
    const [showMove, setShowMove] = useState(false)

    const [skillLevel, setSkillLevel] = useState(Skills.value)
    const [levels, setLevels] = useState("")
    useEffect(() => {
        let level = skillLevel === 1 ? "Novice"
        : skillLevel === 2 ? "Beginner"
        : skillLevel === 3 ? "Skillful"
        : skillLevel === 4 ? "Expedited"
        :  "Expert"
        setLevels(level)
    }, [skillLevel])
    

      
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
    const onSkillClick = (i) => {
        setSkillLevel(i + 1)
        const e = {target: {value: i + 1, name: "value"}}
        const arrays = Skills
        const  arrayName =  "Skills"    
        onArrayChange(e, setFunctions, values, index)
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
                
                    <InputContainer 
                        title="Skill" 
                        placeholder='example' 
                        onChange={onArrayChange} 
                        value={Skills.name} 
                        arrays={Skills} 
                        arrayName="Skills" 
                        name="name" 
                        values={values}
                        setFunctions={setFunctions}
                        index={index}
                    />
                    </div>

                    <div onMouseEnter={() => disableDrag()}>

                   <InputContainer 
                        title={`Level - ${levels}`}
                        placeholder='example' 
                        type="level"  
                        onSkillClick={onSkillClick} 
                        skillLevel={skillLevel}
                    />
                    </div>

                
                </div>
            </div>
       </li>
    )
}

export default SortableElement(SkillsSection)
