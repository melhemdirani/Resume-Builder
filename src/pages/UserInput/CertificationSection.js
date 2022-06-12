import React from 'react';

import EditorContainer from "./EditorContainer";
import InputContainer from "./InputContainer";

const CertificationSection = ({data, onArrayChange, index}) => {
    let Certification = data.Certification
    return(
        <div>
            <InputContainer 
                title="Certification Title" 
                large={true} 
                onChange={onArrayChange} 
                value={Certification[index].title} 
                arrays={data.Certification} 
                index={index}
                arrayName="Certification" 
                name="title"
            />
            <InputContainer 
                title="Certification Year" 
                large={true} 
                onChange={onArrayChange} 
                value={Certification[index].year} 
                index={index}
                arrays={data.Certification} 
                arrayName="Certification" 
                name="year"
            />
            <InputContainer 
                title="Certification Link" 
                large={true} 
                onChange={onArrayChange} 
                value={Certification[index].website} 
                index={index}
                arrays={data.Certification} 
                arrayName="Certification" 
                name="website"
            />
            <InputContainer 
                title="Certification Organization" 
                large={true} 
                onChange={onArrayChange} 
                value={Certification[index].company} 
                index={index}
                arrays={data.Certification} 
                arrayName="Certification" 
                name="company"
            />
        </div>
    )
}

export default CertificationSection

