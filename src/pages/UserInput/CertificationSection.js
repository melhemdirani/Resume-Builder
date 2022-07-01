import React from 'react';

import InputContainer from "./InputContainer";

const CertificationSection = ({data, onArrayChange, index}) => {
    let Certification = data.Certification
    return(
        <div>
            <div className='flex space inputRow'>
                <InputContainer 
                    title="Certification Title" 
                    onChange={onArrayChange} 
                    value={Certification[index].title} 
                    arrays={data.Certification} 
                    index={index}
                    arrayName="Certification" 
                    name="title"
                />
                <InputContainer 
                    title="Certification Year" 
                    onChange={onArrayChange} 
                    value={Certification[index].year} 
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

