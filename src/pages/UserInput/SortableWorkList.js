import React, {useState} from 'react';
import WorkSection from './WorkSection';
import { SortableContainer } from 'react-sortable-hoc';
 
const SortableList = (props) => {
    const [disabled, setDisabled] = useState(false)
    return (
        <ul  style={{listStyleImage: "none !important"}}>
        {props.items.map((value, index) => (
            <WorkSection  
                disabled={disabled}
                key={`item-${index}`} 
                index={index} 
                value={value} 
                onExperienceDelete={props.onExperienceDelete} 
                onArrayChange={props.onArrayChange} 
                setDisabled={setDisabled}
            />
        ))}
        </ul>
    );
}
 
export default SortableContainer(SortableList);