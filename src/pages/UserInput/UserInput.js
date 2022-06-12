import React, { useEffect, useState } from 'react';
import { jsPDF } from "jspdf";
import ReactDOMServer from "react-dom/server";
import { EditorState, convertToRaw, ContentState } from 'draft-js'

import arrow from '../../assets/images/backarrow.svg';
import info from '../../assets/images/info.svg';
import edit from '../../assets/images/edit.svg';
import eye from '../../assets/images/Eye.svg';
import edit2 from '../../assets/images/edit2.svg';
import Delete from '../../assets/images/delete.svg';
import addButton from '../../assets/images/addButton.svg';
import checkbox from '../../assets/images/checkbox.svg';

import './UserInput.styles.scss';
import WorkSection from './WorkSection';
import Resume1 from '../../components/Resume1/Resume1';


import { HashLink } from 'react-router-hash-link';
import EducationSection from './EducationSection';
import PersonalInfoSection from './PersonalInfoSection';
import SkillsSection from './SkillsSection';
import { Resume1_Data } from '../../assets/data';
import CertificationSection from './CertificationSection';
import OrganizationSection from './OrganizationSection';
import EditorContainer from './EditorContainer';



const TitleContainer = ({title}) =>{
    return(
        <div className='TitleContainer flex space'>
            <h2 className='flex'>
                {title}
                <img alt='' src={edit2} />
            </h2>
            <div>
                <img alt="" src={eye} />
                <img alt="" src={Delete} />
            </div>
        </div>
    )
}



function UserInput() {

    const [ data, setData ] = useState(
        Resume1_Data
    )

 
    const [filledPersonal, setFilledPersonal] = useState(false)

    const [workIndex, setWorkIndex] = useState(data.workExperience.length)
    const [educationIndex, setEducationIndex] = useState(data.Education.length)
    const [skillIndex, setSkillIndex] = useState(data.Skills.length)
    const [certIndex, setCertIndex] = useState(data.Certification.length)
    const [orgIndex, setOrgIndex] = useState(data.Organization.length)
    const [text, setText] = useState(data.PersonalInfo.summary)
    const content = ContentState.createFromText(text);

    const [profSummary, setProfSummary]= useState(() => EditorState.createWithContent(content))

    const onPersonalChange = (e) => {
        
        if(!filledPersonal){
            setFilledPersonal(true)
        }
        let {value, name } = e.target

        setData(data => ({
            ...data,
            PersonalInfo:{ ...data.PersonalInfo, [name]: value}
        }))
    }
    const onArrayChange = (e, arrays, arrayName, i) => {
        let {value, name } = e.target
        let index = i 
        setData(data => ({
            ...data,
            [arrayName]: [
                ...arrays.slice(0, index), {...arrays[index], [name]: value }, ...arrays.slice(index + 1)
            ]
        }))
    }

    const addMore = (arrayName, setFunction, variable ) => {
        arrayName.push(arrayName[0]);
        setFunction(variable + 1);
    }
    const generatePdf = () => {
        const doc = new jsPDF("p", "px", [603, 612.0001]);
       
      
        doc.setFont('Roboto-Regular', 'normal');
        doc.setFontSize(8);
        let height = doc.internal.pageSize.getHeight();
        let width = doc.internal.pageSize.getWidth();
        doc.html(ReactDOMServer.renderToStaticMarkup(<Resume1 data={Resume1_Data} height={height} />), {
          x: 0,
          y: 0,
          callback: function (doc) {
            doc.save('sample.pdf');
          },
          width: 650, // <- here
          windowWidth: 650 // <- here
        });
    }
    useEffect(() => {
        
        let newText = "";
        for (let i = 0; i < mappedBlocks.length; i++) {
            const block = mappedBlocks[i];
            if (i === mappedBlocks.length - 1) {
                newText += block;
            } else {
                // otherwise we join with \n, except if the block is already a \n
                if (block === "\n") newText += block;
                else newText += block + "\n";
            }
        }
        return(setText(newText))

    }, [profSummary])

    useEffect(() => {
        let e = { target: {value: text, name: "summary" }}
        onPersonalChange(e)
    }, [text])

    const blocks = convertToRaw(profSummary.getCurrentContent()).blocks;
    const mappedBlocks = blocks.map(
      block => (!block.text.trim() && "\n") || block.text
    );

    return (
        <div className='UserInput_Container'>
            <div className='navigation'>
                <HashLink to="/" className='flex'>
                    <img alt='' src={arrow} />
                    <span>Back to Main Interface</span>
                </HashLink>
                <div className='flex'>
                    <button className='download' onClick={generatePdf}>Download</button>
                    <button className='info'>
                        <img alt='' src={info} />
                    </button>
                </div>
            </div>
            <div className='flex body space'>
                <div className='c1'>
                    <div className='row1'>
                        <p className='flex'>
                            <span>Resume Name</span>
                            <img alt='' src={edit} />
                        </p>
                        <select>
                            <option>English</option>
                        </select>
                    </div>
                    <div className='row2'>
                        <div className='Menu'>
                            <a>Basic Info</a>
                            <a>Summary</a>
                            <a>Skills</a>
                            <a>Work Experience</a>
                            <a>Education</a>
                        </div>
                        <div className='inputs'>
                            <TitleContainer title={"Personal Info"} />
                            <PersonalInfoSection onPersonalChange={onPersonalChange} data={data} />
                            <TitleContainer title={"Professional Summary"} />
                            <EditorContainer editorState={profSummary} setEditorState={setProfSummary}/>

                            <TitleContainer title={"Work Experience"} />
                            { [...Array(workIndex)].map((e, index) => 
                                <WorkSection 
                                 data={data}  
                                 onArrayChange={onArrayChange} 
                                 index={index} 
                                 key={index}  
                                />
                            )}
                            <button 
                             className='add_button' 
                             onClick={() => addMore(data.workExperience, setWorkIndex, workIndex)}
                            > 
                                + Add More Position
                            </button>
                            <TitleContainer title={"Education"} />
                            { [...Array(educationIndex)].map((e, index) => 
                                <EducationSection 
                                 data={data}  
                                 onArrayChange={onArrayChange} 
                                 index={index} 
                                 key={index}  
                                />
                            )}
                            <button 
                             className='add_button' 
                             onClick={() => addMore(data.Education, setEducationIndex, educationIndex)}
                            > 
                                + Add More Education
                            </button>
                            <TitleContainer title={"Skills"} />
                             { [...Array(skillIndex)].map((e, index) => 
                                <SkillsSection 
                                   onArrayChange={onArrayChange} 
                                   data={data} 
                                   j={index}
                                   key={index}
                               />
                            )}
                            <button 
                             className='add_button' 
                             onClick={() => addMore(data.Skills, setSkillIndex, skillIndex)}
                            > 
                                + Add More Skill
                            </button>
                            <TitleContainer title={"Certification"} />
                            { [...Array(certIndex)].map((e, index) => 
                                <CertificationSection 
                                   onArrayChange={onArrayChange} 
                                   data={data} 
                                   index={index}
                                   key={index}
                               />
                            )}
                            <button 
                             className='add_button' 
                             onClick={() => addMore(data.Certification, setCertIndex, certIndex)}
                            > 
                                + Add More Certification
                            </button>
                            <TitleContainer title={"Organization"} />
                            { [...Array(orgIndex)].map((e, index) => 
                                <OrganizationSection 
                                   onArrayChange={onArrayChange} 
                                   data={data} 
                                   index={index}
                                   key={index}
                               />
                            )}
                            <button 
                             className='add_button' 
                             onClick={() => addMore(data.Organization, setOrgIndex, orgIndex)}
                            > 
                                + Add More Organization
                            </button>
                            <p className='flex inputRow'><img alt="" src={checkbox} /> Hide Level </p>
                            <button className='addSection_button'>
                                <img alt="" src={addButton} />
                                <span>Add More Section</span>
                            </button>
                            </div>
                    </div>
                </div>
                <div className='resumes'>
                    <Resume1 data={data} filledPersonal={filledPersonal} grid={"40% 60%"} width={"100%"}/>
                </div>
            </div>
        </div>
    )
}

export default UserInput