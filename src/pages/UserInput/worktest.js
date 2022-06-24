import React, { useState , useRef} from 'react';
import { useDrag, useDrop } from 'react-dnd';

import EditorContainer from "./EditorContainer";
import DateInput from "./DateInput";
import InputContainer from "./InputContainer";
import checkbox from '../../assets/images/checkbox.svg';
import arrowDownHover from '../../assets/images/arrowDown.svg';
import arrowDown from '../../assets/images/arrowDownG.svg';
import group from '../../assets/images/group.svg';
import eye from '../../assets/images/Eye.svg';
import Delete from '../../assets/images/delete.svg';

const WorkSection = ({data, onArrayChange, index, onExperienceDelete, moveCard, id}) => {
    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
        accept: "cards",
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
        type: "cards",
        item: () => {
          return { id, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      })
  drag(drop(ref))

    let SetPresentValue = data.workExperience[index].endDate === "present" ? true : false
    

    const [present, setPresent] = useState(SetPresentValue)

    let workExperience = data.workExperience
    return(
        <div ref={ref}  >
            <div style={{display:"flex"}}  >
                <img alt="" src={group} style={{position: "absolute", marginLeft: "-25px", marginTop: "18px"}}/>
                <div className='Experience_SubContainer'>
                    <div>
                        <p className='work'>{workExperience[index].title} at {workExperience[index].company} </p>
                        <p className='date'>{workExperience[index].startDate} - {workExperience[index].endDate}</p>
                    </div>
                    <img alt="" src={arrowDown} />
                </div>
                <div  className='groupedImages' >
                    <button onClick={() => {onExperienceDelete(index)}}>
                        <img alt="" src={Delete} />
                    </button>
                    <img alt="" src={eye} />
                </div>
            </div>
          
            <InputContainer 
                title="Job Titles" 
                large={true} 
                onChange={onArrayChange} 
                value={workExperience[index].title} 
                arrays={data.workExperience} 
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
                arrays={data.workExperience} 
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
                arrays={data.workExperience} 
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
                arrays={data.workExperience} 
                arrayName="workExperience" 
                name="company"
            />
            <DateInput 
                title="Start & End Date"  
                onChange={onArrayChange}
                present={present}
                setPresent={setPresent}
                index={index}
                arrays={data.workExperience} 
                startDate={workExperience[index].startDate}
                endDate={workExperience[index].endDate}
                arrayName="workExperience" 
            />
            <p className='flex inputRow' onClick={() => setPresent(!present)}>
                {present ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                I am currently working here 
            </p>
        </div>
    )
}

export default WorkSection

