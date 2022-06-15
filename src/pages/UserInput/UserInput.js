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
import LanguageSection from './LanguageSection';
import AddSections from '../../components/AddSections/AddSections';



const TitleContainer = ({title, onDelete}) =>{
    return(
        <div className='TitleContainer flex space'>
            <h2 className='flex'>
                {title}
                <img alt='' src={edit2} />
            </h2>
            <div>
                <img alt="" src={eye} />
                <img alt="" src={Delete} onClick={() => onDelete()} className="DeleteButton" />
            </div>
        </div>
    )
}



function UserInput() {

    const [ data, setData ] = useState(
        Resume1_Data
    )


    const [filledPersonal, setFilledPersonal] = useState(false)
    const [showPersonal, setShowPersonal] = useState(true)
    const [workIndex, setWorkIndex] = useState(data.workExperience.length)
    const [educationIndex, setEducationIndex] = useState(data.Education.length)
    const [skillIndex, setSkillIndex] = useState(data.Skills.length)
    const [certIndex, setCertIndex] = useState(data.Certification.length)
    const [orgIndex, setOrgIndex] = useState(data.Organization.length)
    const [langIndex, setLangIndex] = useState(data.Language.length)
    const [showAddSection, setShowAddSection] = useState(false)

    const [text, setText] = useState(data.PersonalInfo.summary)

    const alternate = (variable) => {
        if(variable.length === 0) {
            return false
        } else return true
    }

    const [showSections, setShowSections] = useState({
        workExperience: alternate(workIndex),
        Education: alternate(educationIndex),
        Skills: alternate(skillIndex),
        Certification: alternate(certIndex),
        Organization: alternate(orgIndex),
        Language: alternate(langIndex),
    })

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
        doc.html(ReactDOMServer.renderToString(<Resume1 data={data} height={height} showSections={showSections} />), {
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

    const newObj = (obj) =>  Object.keys(obj).reduce((accumulator, key) => {
        return {...accumulator, [key]: ""};
    }, {});

    const onPersonalDelete = () => {
        setData(data => ({
            ...data,
            PersonalInfo: newObj(data.PersonalInfo)
        }))
        let NewContent = ContentState.createFromText("");

        setProfSummary(() => EditorState.createWithContent(NewContent))
        setShowPersonal(false)
    }
   
    const onArrayDelete = (setFunction,  Array, arrayName) => {
        setFunction(0);
        setData(data => ({
            ...data,
            [Array]: [newObj(arrayName)]
        }))
        setShowSections(sections => ({
            ...sections,
            [Array]: false
        }))
    }

    const addDetail = (setIndex, array) => {
        setIndex(1)
        setShowSections(
            showSections => ({
                ...showSections,
                [array]: true
            })
        )
    }
    useEffect(() => {
        console.log("personal",data.PersonalInfo)
        console.log("new",data.PersonalInfo)

    }, [data.PersonalInfo])
    return (

    <div className='UserInput_Container' style={showAddSection ? { marginTop: "-100vh" } : {margin: "0"}}>
            {showAddSection && 
                <AddSections 
                    addDetail={addDetail}
                    setWorkIndex={setWorkIndex}
                    setEducationIndex={setEducationIndex}
                    setSkillIndex={setSkillIndex}
                    setCertIndex={setCertIndex}
                    setLangIndex={setLangIndex}
                    setOrgIndex={setOrgIndex}
                    setShowAddSection={setShowAddSection}
                    setShowPersonal={setShowPersonal}
                />
            }
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
                            { showPersonal && <HashLink to='/editor/#personal'>Basic Info</HashLink>}
                            {showPersonal && <HashLink to='/editor/#summary'>Summary</HashLink>}
                            {showSections.Skills && <HashLink to='/editor/#Skills'>Skills</HashLink>}
                            {showSections.workExperience && <HashLink to='/editor/#workExperience'>Work Experience</HashLink>}
                           {showSections.Education && <HashLink to='/editor/#Education'>Education</HashLink>}
                           {showSections.Certification && <HashLink to='/editor/#Certification'>Certification</HashLink>}
                           {showSections.Organization && <HashLink to='/editor/#Organization'>Organization</HashLink>}
                           {showSections.Language && <HashLink to='/editor/#Language'>Language</HashLink>}
                        </div>
                        <div className='inputs'>
                            {  showPersonal && 
                                <div id='personal'>
                                    <TitleContainer title={"Personal Info"} onDelete={onPersonalDelete}/>
                                    <PersonalInfoSection onPersonalChange={onPersonalChange} data={data} />  
                                   
                                </div>
                            }
                            {  showPersonal && 
                                <div id='summary'>
                                    <TitleContainer title={"Professional Summary"} />
                                    <EditorContainer editorState={profSummary} setEditorState={setProfSummary}/>
                                </div>
                            }

                            { showSections.workExperience &&
                                <div id='workExperience'>
                                    <TitleContainer 
                                        title={"Work Experience"} 
                                        onDelete={
                                            () => onArrayDelete(
                                                setWorkIndex, 
                                                "workExperience", 
                                                data.workExperience, 
                                            )
                                        }
                                    />
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
                                </div>
                            }
                            {   showSections.Education &&
                                <div id='Education'>
                                    <TitleContainer 
                                        title={"Education"} 
                                        onDelete={
                                            () => onArrayDelete(
                                                setEducationIndex, 
                                                "Education", 
                                                data.Education,
                                            )
                                        }
                                    />
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
                                </div>
                            }
                            { showSections.Skills &&
                                <div id='Skills'>
                                    <TitleContainer title={"Skills"} onDelete={() => onArrayDelete(setSkillIndex, "Skills", data.Skills)}/>
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
                                    <p className='flex inputRow'><img alt="" src={checkbox} /> Hide Level </p>
                                </div>
                            }
                            {   showSections.Certification &&
                                <div id='Certification'>
                                    <TitleContainer title={"Certification"} onDelete={() => onArrayDelete(setCertIndex, "Certification", data.Certification)}/>
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
                                </div>
                            }
                            {   showSections.Organization &&
                                <div id='Organization'>
                                    <TitleContainer title={"Organization"} onDelete={() => onArrayDelete(setOrgIndex, "Organization", data.Organization)}/>
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
                                </div>
                            }
                            {   showSections.Language &&
                                <div id='Language'>
                                    <TitleContainer title={"Language"} onDelete={() => onArrayDelete(setLangIndex, "Language", data.Language)}/>
                                    { [...Array(langIndex)].map((e, index) => 
                                        <LanguageSection 
                                        onArrayChange={onArrayChange} 
                                        data={data} 
                                        j={index}
                                        key={index}
                                    />
                                    )}
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.Organization, setOrgIndex, orgIndex)}
                                    > 
                                        + Add More Organization
                                    </button>
                                </div>
                            }
                            <button className='addSection_button' onClick={() => setShowAddSection(true)}>
                                <img alt="" src={addButton} />
                                <span >Add More Section</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='resumes'>
                    <Resume1 data={data} filledPersonal={filledPersonal} grid={"40% 60%"} width={"100%"} showSections={showSections} height="632px"/>
                </div>
            </div>
        </div>
    )
}

export default UserInput