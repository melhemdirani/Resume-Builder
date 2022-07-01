import React, { useState , useRef} from 'react';
import { useDrag, useDrop } from 'react-dnd';

import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';
import arrowDownHover from '../../assets/images/arrowDown.svg';
import arrowDown from '../../assets/images/arrowDownG.svg';
import group from '../../assets/images/group.svg';
import eye from '../../assets/images/Eye.svg';
import Delete from '../../assets/images/delete.svg';

const WorkSection = ({workExperience, onArrayChange, index, onExperienceDelete, moveCard, id, setDraggingWork}) => {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: 'div',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'div',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0 : 1
  const marginBottom = isDragging? "-50px" : "15px"

  drag(drop(ref))

  let SetPresentValue = workExperience[index].endDate === "present" ? true : false
  

  const [present, setPresent] = useState(SetPresentValue)


  const [showInputs, setShowInputs] = useState(false)
  const [showMove, setShowMove] = useState(false)

    
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

  return(
      <div 
        ref={ref} 
        data-handler-id={handlerId} 
        style={{opacity, marginBottom}} 
        className="WorkSection_Container"
        onMouseEnter={() => {mouseEnter()}}
        onMouseLeave={() => {mouseLeave()}} 
        onDragEnd={() => setDraggingWork(false)}
        onDragEnter={() => setDraggingWork(true)}
        >
          <div style={{display:"flex"}} 
            
          >
            {showMove && <img alt="" src={group} className="moveIcon" />}
            <div className='Experience_SubContainer'>
                <div>
                    <p className='work'>{workExperience[index].title} at {workExperience[index].company} </p>
                    <p className='date'>{workExperience[index].startDate} - {workExperience[index].endDate}</p>
                </div>
                <img 
                  alt="" 
                  src={arrowDown} 
                  onClick={() => {setShowInputs(!showInputs)}} 
                  className="arrow"
                  style={{
                    transform: showInputs ? "rotate(180deg) " : "rotate(0deg)"
                  }}
                />
            </div>
            <div  className='groupedImages' >
                <button onClick={() => {onExperienceDelete(index)}}>
                    <img alt="" src={Delete} />
                </button>
                <img alt="" src={eye} />
            </div>
          </div>
          {   showInputs &&  
            <div>
              <InputContainer 
                title="Job Titles" 
                large={true} 
                onChange={onArrayChange} 
                value={workExperience[index].title} 
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
                value={workExperience[index].type} 
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
                value={workExperience[index].location} 
                arrays={workExperience} 
                index={index}
                arrayName="workExperience" 
                name="location"
              />
              <InputContainer 
                title="Company Name" 
                large={true} 
                onChange={onArrayChange} 
                value={workExperience[index].company} 
                index={index}
                arrays={workExperience} 
                arrayName="workExperience" 
                name="company"
              />
              <DateInput 
                title="Start & End Date"  
                onChange={onArrayChange}
                present={present}
                setPresent={setPresent}
                index={index}
                arrays={workExperience} 
                startDate={workExperience[index].startDate}
                endDate={workExperience[index].endDate}
                arrayName="workExperience" 
              />
              <p className='flex inputRow' onClick={() => setPresent(!present)}>
                {present ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                I am currently working here 
              </p>
            </div>
          }
      </div>
  )
}

export default WorkSection

