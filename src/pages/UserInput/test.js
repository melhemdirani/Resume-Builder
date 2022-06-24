import React, { useContext, useEffect, useState, useCallback } from 'react';
import { jsPDF } from "jspdf";
import ReactDOMServer from "react-dom/server";
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import update from 'immutability-helper'


import arrow from '../../assets/images/backarrow.svg';
import info from '../../assets/images/info.svg';
import edit from '../../assets/images/edit.svg';
import eye from '../../assets/images/Eye.svg';
import Delete from '../../assets/images/delete.svg';
import edit2 from '../../assets/images/edit2.svg';
import addButton from '../../assets/images/addButton.svg';
import checkbox from '../../assets/images/checkbox.svg';

import './UserInput.styles.scss';
import WorkSection from './WorkSection';
import Resume1 from '../../components/Resume1/Resume1';


import { HashLink } from 'react-router-hash-link';
import EducationSection from './EducationSection';
import PersonalInfoSection from './PersonalInfoSection';
import SkillsSection from './SkillsSection';
import CertificationSection from './CertificationSection';
import OrganizationSection from './OrganizationSection';
import EditorContainer from './EditorContainer';
import LanguageSection from './LanguageSection';
import AddSections from '../../components/AddSections/AddSections';
import { EditorContext } from '../../components/EditorContext';



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


    const {data, setData}= useContext(EditorContext)

    const [showPersonal, setShowPersonal] = useState(true)
    const [workIndex, setWorkIndex] = useState(data.workExperience.length)
    const [educationIndex, setEducationIndex] = useState(data.Education.length)
    const [skillIndex, setSkillIndex] = useState(data.Skills.length)
    const [certIndex, setCertIndex] = useState(data.Certification.length)
    const [orgIndex, setOrgIndex] = useState(data.Organization.length)
    const [langIndex, setLangIndex] = useState(data.Language.length)
    const [showAddSection, setShowAddSection] = useState(false)
    const [hideLevel, setHideLevel] = useState(false)

    const [n , setN ] = useState(651)
    const [y , setY ] = useState(651)

    const [text, setText] = useState(data.PersonalInfo.summary)

    const alternate = (variable) => {
        if(variable.length === 0) {
            return false
        } else return true
    }
    let length = data.workExperience.length + data.Education.length + data.Certification.length

    useEffect(()=>{
        if(length > 7){
            let difference =  length - 7
            setN(651 + difference*50)
        }
    }, [length])

    useEffect(()=>{
        let personalLength = data.PersonalInfo.summary.length*0.04
        let textLength = data.PersonalInfo.summary.length
        if(textLength > 870){
            setY(y + personalLength)
        }
        if(data.Organization.length > 3){
            let difference =  length - 3
            setY(y + difference*25)
        }
        if(data.Language.length > 6){
            let difference =  data.Language.length - 6
            setY(y + difference*15)
        }
        if(data.Skills.length > 8){
            let difference =  data.Skills.length  - 6
            setY(y + difference*10)
        }
    }, [data.PersonalInfo.summary, data.Organization.length, data.Language.length,  data.Skills.length ])


   
    const [showSections, setShowSections] = useState({
        workExperience: alternate(workIndex),
        Education: alternate(educationIndex),
        Skills: alternate(skillIndex),
        Certification: alternate(certIndex),
        Organization: alternate(orgIndex),
        Language: alternate(langIndex),
    })



    const {profSummary, setProfSummary}= useContext(EditorContext)


    const onPersonalChange = (e) => {
        
        if(!showPersonal){
            setShowPersonal(true)
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

    const biggerValue = (a, b) => {
        if ( a > b) {
            return a
        } else return b
    }
    const generatePdf = () => {
        const doc = new jsPDF("p", "px", [600, biggerValue(n, y)]); // compare which height is bigger
        doc.setFont('Roboto-Regular', 'normal');
        doc.setFontSize(8);
        let height = doc.internal.pageSize.getHeight();
        let width = doc.internal.pageSize.getWidth();
        doc.html(ReactDOMServer.renderToString(<Resume1 data={data} height={height} width={`calc(${width} - 100px)`} showSections={showSections} hideLevel={hideLevel}/>), {
          x: 0,
          y: 0,
          callback: function (doc) {
            doc.deletePage(2)
            doc.save('sample.pdf');
          },
          width: 650, // <- here
          windowWidth: 650, // <- here
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

    const onExperienceDelete = (i) => {

        if(workIndex === 1){
            return onArrayDelete(setWorkIndex, "workExperience", data.workExperience)
        } else{
            let newWorkExperience = data.workExperience
            var filtered = newWorkExperience.filter(function(value, index, arr){ 
                return index !== i;
            });
            setData(data => ({
                ...data,
                workExperience: filtered
            }))
            setWorkIndex(workIndex - 1)
        }

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

    {/*const [boxes, setBoxes] = useState();

    const handleDrag = (ev) => {
        setBoxes(ev.currentTarget.id);
    };
     const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.id === boxes);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = boxes.map((box) => {
      if (box.id === boxes) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

setBoxes(newBoxState); // old example

  };*/} 
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    let workExperience = data.workExperience
  
    workExperience.map((item, index) => {
        if (item.order === dragIndex) {
            return workExperience[index]["order"]= hoverIndex
        }
        if (item.order === hoverIndex) {
           return workExperience[index]["order"]= dragIndex

        }
      });

      console.log("workexperience", data.workExperience)

   
  }, [])

  const renderCard = useCallback((item, index) => {
    return (
        <WorkSection 
            data={data}  
            onArrayChange={onArrayChange} 
            index={index} 
            key={index} 
            id={item.order} 
            onExperienceDelete={onExperienceDelete}
            moveCard={moveCard}
        />
    )
  }, [])
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
                                    <EditorContainer editorState={profSummary} setEditorState={setProfSummary} />
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
                                    { data.workExperience.map((e, index) => 
                                        renderCard(e, index)
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
                                        hideLevel={hideLevel}
                                    />
                                    )}
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.Skills, setSkillIndex, skillIndex)}
                                    > 
                                        + Add More Skill
                                    </button>
                                    <p className='flex inputRow' onClick={() => setHideLevel(!hideLevel)}>
                                        {hideLevel ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                                        Hide Level
                                    </p>
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
                                    onClick={() => addMore(data.Language, setLangIndex, langIndex)}
                                    > 
                                        + Add More Language
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
                    <Resume1 data={data}  grid={"40% 60%"} width={"450px"} showSections={showSections} height="632px" hideLevel={hideLevel}/>
                </div>
            </div>
        </div>
    )
}

export default UserInput