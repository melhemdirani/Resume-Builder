import React, { useState , useRef} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { SortableElement } from 'react-sortable-hoc'

import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';
import arrowDownHover from '../../assets/images/arrowDown.svg';
import arrowDown from '../../assets/images/arrowDownG.svg';
import group from '../../assets/images/group.svg';
import eye from '../../assets/images/Eye.svg';
import Delete from '../../assets/images/delete.svg';
import TipEditor from './TipEditor';
import { useEffect } from 'react';





const styles = {
  container: {
    width: "558px",
    marginLeft:" -20px",
    marginBottom: "10px",
    marginLeft: "-40px",
    listStyleType: "none"
  },
  subConainer:{
    display: "flex",
    width: "544px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px",
    lineHeight: "24px",
    border: "1px solid #D9D9D9",
    borderRadius: "2px",
    backgroundColor: "white"
  },
  work: {
    fontSize: "14px",
    fontWeight: "700",
    margin: 0
  },
  arrow:{
    cursor: "pointer"
  } ,
  date:{
    margin: 0,
    cursor: "move"

  },
  date2:{
    margin: 0,
  },
  groupedImages:{
    marginRight: "-40px",
    marginLeft: "10px",
    display: "flex",
    flexDirection: "column",
    marginTop: "5px",
  },
  img: {
    marginBottom: "11px",
  },
  button:{
      border: "none",
      backgroundColor: "transparent",
      padding: 0,
      height: "30px",
      cursor: "pointer",
  },
  moveIcon: {
    cursor: "move",
    position: "absolute",
    margin: "18px 0 0 -25px"
  }
}

const WorkSection = ({value, onArrayChange, onExperienceDelete, setDisabled, disabled, data, setFunctions, values}) => {

  const [index, setIndex] = useState(-1)
  const [changedIndex, setChangedIndex] = useState(false)

  useEffect(() => {
    data.workExperience.filter(function(values, indexs, arr){ 
      if(values.id === value.id){
        setIndex(indexs)
        setChangedIndex(true)
      }
    })
  }, [])

  const workExperience= value
  
  const [showInputs, setShowInputs] = useState(false)
  const [showMove, setShowMove] = useState(false)
  
  let SetPresentValue = workExperience.endDate === "present" ? true : false
  
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

  const [descriptionHtml, setDescriptionHtml] = useState(workExperience.description)
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
  

  return changedIndex && index !== -1 ? (
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
                    <p style={styles.work}>{workExperience.title} at {workExperience.company} </p>
                    <p style={styles.date2}>{workExperience.startDate} - {workExperience.endDate}</p>
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
                <button onClick={() => {onExperienceDelete(index, data.workExperience, "workExperience")}} style={styles.button}>
                    <img alt="" src={Delete}  style={styles.img}/>
                </button>
                <img alt="" src={eye} style={styles.img} />
            </div>
          </div>
          {   showInputs &&  
            <div>
              <InputContainer 
                title="Job Titles" 
                large={true} 
                onChange={onArrayChange} 
                setFunctions={setFunctions}
                values={values}
                value={workExperience.title} 
                arrays={workExperience} 
                index={index}
                arrayName="workExperience" 
                name="title"
              />
              <InputContainer 
                title="Employment Type" 
                large={true} 
                type={"select"} 
                onChange={onArrayChange} 
                value={workExperience.type} 
                setFunctions={setFunctions}
                values={values}
                arrays={workExperience} 
                index={index}
                arrayName="workExperience" 
                name="type"
              />
              <InputContainer 
                title="Location"
                large={true} 
                placeholder='example' 
                onChange={onArrayChange} 
                value={workExperience.location} 
                arrays={workExperience} 
                setFunctions={setFunctions}
                values={values}
                index={index}
                arrayName="workExperience" 
                name="location"
              />
              <InputContainer 
                title="Company Name" 
                large={true} 
                onChange={onArrayChange} 
                value={workExperience.company} 
                setFunctions={setFunctions}
                values={values}
                index={index}
                arrays={workExperience} 
                arrayName="workExperience" 
                name="company"
              />
              <DateInput 
                title="Start & End Date"  
                onChange={onArrayChange}
                setFunctions={setFunctions}
                values={values}
                present={present}
                setPresent={setPresent}
                index={index}
                arrays={workExperience} 
                startDate={workExperience.startDate}
                endDate={workExperience.endDate}
                arrayName="workExperience" 
              />
              <TipEditor 
                summary={descriptionHtml} 
                setSummaryHtml={setDescriptionHtml} 
                expand={summaryExpand} 
                setExpand={setSummaryExpand}
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

export default SortableElement(WorkSection)

