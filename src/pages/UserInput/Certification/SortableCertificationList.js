import React, {useState} from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import CertificationSection from './CertificationSection';
 
const SortableCertificationList = (props) => {
    const [disabled, setDisabled] = useState(false)
    return (
        <ul  style={{listStyleImage: "none !important"}}>
        {props.items.map((value, index) => (
            <CertificationSection  
                disabled={disabled}
                key={`item-${index}`} 
                index={index} 
                value={value} 
                data={props.data}
                onExperienceDelete={props.onExperienceDelete} 
                onArrayChange={props.onArrayChange} 
                setDisabled={setDisabled}
            />
        ))}
        </ul>
    );
}
 
export default SortableContainer(SortableCertificationList);