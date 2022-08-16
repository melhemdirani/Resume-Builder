import React, {useState} from 'react';
import WorkSection from './WorkSection';
import { SortableContainer } from 'react-sortable-hoc';
import EducationSection from './EducationSection';
 
const SortableEducationList = (props) => {
    const [disabled, setDisabled] = useState(false)
    return (
        <ul  style={{listStyleImage: "none !important"}}>
        {props.items.map((value, index) => (
            <EducationSection  
                disabled={disabled}
                key={`item-${index}`} 
                index={index} 
                value={value} 
                data={props.data}
                onExperienceDelete={props.onExperienceDelete} 
                onArrayChange={props.onArrayChange} 
                setDisabled={setDisabled}
                values={props.items}
                setFunctions={props.setFunctions}
            />
        ))}
        </ul>
    );
}
 
export default SortableContainer(SortableEducationList);