import React, { useContext, useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { jsPDF } from "jspdf";
import ReactDOMServer from "react-dom/server";
import { SortableElement } from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move';
import { HashLink } from 'react-router-hash-link';

import arrow from '../../assets/images/backarrow.svg';
import additionalButton from '../../assets/images/additionalButton.svg';
import info from '../../assets/images/info.svg';
import edit from '../../assets/images/edit.svg';
import eye from '../../assets/images/Eye.svg';
import Delete from '../../assets/images/delete.svg';
import edit2 from '../../assets/images/edit2.svg';
import addButton from '../../assets/images/addButton.svg';
import checkbox from '../../assets/images/checkbox.svg';
import Union from '../../assets/images/Union.svg';

import './UserInput.styles.scss';
import WorkSection from './WorkSection';

import SortableWorkList from './SortableWorkList';
import EducationSection from './EducationSection';
import PersonalInfoSection from './PersonalInfoSection';
import SkillsSection from './SkillsSection';
import CertificationSection from './CertificationSection';
import OrganizationSection from './OrganizationSection';
import LanguageSection from './LanguageSection';
import AddSections from '../../components/AddSections/AddSections';
import { EditorContext } from '../../components/EditorContext';
import ImageCropper from '../../components/ImageCropper/ImageCropper';
import TipEditor from './TipEditor';
import Resume4 from '../../components/Resume4/Resume4';
import Resume5 from '../../components/Resume5/Resume5';
import Resume6 from '../../components/Resume6/Resume6';
import Resume1 from '../../components/Resume1/Resume1';
import Resume2 from '../../components/Resume2/Resume2';
import Resume3 from '../../components/Resume3/Resume3';
import { useParams } from 'react-router-dom';
import { 
        Resume1_Data,  
        Resume2_Data,  
        Resume3_Data,  
        Resume4_Data,  
        Resume5_Data,  
        Resume6_Data,  
    } from '../../assets/data';
import ReferenceSection from './ReferenceSection';
import ProfessionalSkillsSection from './ProfessionalSkillsSection';
import VolunteerSection from './VolunteerSection';
import EditableSection from './EditableSection';
import SortableMenu from './SortableMenu';



const AdditionalButton = ({item, show, setAdditionalButtons, AdditionalButtons}) => {
    const onButtonClick = () => {
        setAdditionalButtons(items => ({
            ...items,
            [item]: true
        }))
    }
   
    return !AdditionalButtons[item]  && (
        <button className='AdditionalButtons flex' onClick={() => onButtonClick()}>
            <img alt="" src={Union} />
            <span>{item}</span>
        </button>
    )
}



function UserInput() {
    const params = useParams()

    let selectedResume = params.resume

    const {data, setData, cropper, showAdditional, setShowAdditional, round, summaryHtml, setSummaryHtml}= useContext(EditorContext)

    const [achievementsHtml, setAchievementsHtml] = useState()
    const [volunteerHtml, setVolunteerHtml] = useState()
    const [projectsHtml, setProjectsHtml] = useState()
    const [resumeName, setResumeName] = useState("Resume Name")


   

    const [showPersonal, setShowPersonal] = useState(true)
    const [summaryExpand, setSummaryExpand] = useState(false)
    const [volunteerExpand, setVolunteerExpand] = useState(false)
    const [projectsExpand, setProjectsExpand] = useState(false)
    const [achievementsExpand, setAchievementsExpand] = useState(false)

    const [workIndex, setWorkIndex] = useState(data.workExperience.length)
    const [educationIndex, setEducationIndex] = useState(data.Education.length)
    const [skillIndex, setSkillIndex] = useState(data.Skills.length)
    const [certIndex, setCertIndex] = useState(data.Certification.length)
    const [orgIndex, setOrgIndex] = useState(data.Organization.length)
    const [langIndex, setLangIndex] = useState(data.Language.length)
    const [showAddSection, setShowAddSection] = useState(false)
    const [hideLevel, setHideLevel] = useState(false)
    const [dragginWork, setDraggingWork] = useState(false)
    const [showAddButtons, setShowAddButtons] = useState(false)
    const [windowHeight, setWindowHeight] = useState("")

    const [items, setItems] = useState(data.workExperience)

    const [titles, setTitles] = useState()

    const MenuItems = [
        {name: "Basic Info", to: "personal"}, 
        {name: "Summary", to: "summary"}, 
        {name: "Skills", to: "Skills"}, 
        {name: "Work Experience", to: "workExperience"},
        {name: "Education", to: "Education"}, 
        {name: "Certification", to: "Certification"},
        {name: "Organization", to: "Organization"}, 
        {name: "Language", to: "Language"}
    ]

    useEffect(() => {
        setData(data => ({
            ...data,
            workExperience: items
        }))

        console.log()
    }, [items])
   
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(prevItem => (arrayMoveImmutable(prevItem, oldIndex, newIndex)));
      };
     
    const [AdditionalButtons, setAdditionalButtons] =  useState ({
        "LinkedIn": true,
        "Twitter": true,
        "Nationality": false,
        "Country": false,
        "Driving License": false,
        "Place Of Birth": false,
        "Date Of Birth": false,
        "Custom Field": false,
    })
    

    const alternate = (variable) => {
        if(variable.length === 0 || variable.length === undefined) {
            return false
        } else return true

    }

    const showSections = data.showSections


   
    const onPersonalChange = (e) => {
        if(!showSections.PersonalInfo){
            setData(data => ({
                ...data,
                showSections:{ ...data.showSections, PeronalInfo: true}
            }))
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
    const addMore = (arrayName, array ) => {
        let arr = arrayName[arrayName.length - 1]
        let newArr = {...arr}
        newArr.order = arr.order + 1
        setData(data => ({
            ...data,
            [array]:[ ...arrayName,  newArr]
        }))
      
    }

  
   

    const newObj = (obj) =>  Object.keys(obj).reduce((accumulator, key) => {
        return {...accumulator, [key]: ""};
    }, {});

    const onPersonalDelete = (show) => {

        if (show === "Summary") {
            setData(data => ({
                ...data,
                PersonalInfo: {
                    ...data.PersonalInfo,
                    summary: ""
                }
            }));
            setSummaryHtml(null)
        }
        setData(data => ({
            ...data,
            showSections:{ ...data.showSections, [show]: false}
        }))
        console.log("data PErson", data.PersonalInfo)
    }
   
    const onArrayDelete = (Array, arrayName) => {
        setData(data => ({
            ...data,
            [Array]: [newObj(arrayName)]
        }))

        setData(data => ({
            ...data,
            showSections:{ ...data.showSections, [Array]: false}
        }))
    }
    const onExperienceDelete = (i) => {
        if(data.workExperience.length < 2 ){
            return onArrayDelete( "workExperience", data.workExperience)
        } else{
            let newWorkExperience = data.workExperience
            let newArr= newWorkExperience.filter(function(value, index, arr){ 
                return index !== i;
            });
            setData(data => ({
                ...data,
                workExperience: newArr
            }))
        }
    }   
 

    const addDetail = (setIndex, array) => {
        setIndex(1)
        setData(data => ({
            ...data,
            showSections:{ ...data.showSections, [array]: true}
        }))
    }

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
        if(!dragginWork){
            setData(data => ({
                ...data,
                workExperience: workExperience
            }))
        }
           
      
    }, [dragginWork])

    const [changedData, setChangedData] = useState(false)

    useEffect(() => {
        if( selectedResume === 'resume1') {
            setChangedData(false)
            setData(Resume1_Data)
            setChangedData(true)
        }
        if( selectedResume === 'resume2' ){
            setChangedData(false)
            setData(Resume2_Data)
            setChangedData(true)
        }
        if( selectedResume === 'resume3'){
            setChangedData(false)
            setData(Resume3_Data)
            setChangedData(true)
        }
        if( selectedResume === 'resume4'){
            setChangedData(false)
            setData(Resume4_Data)
            setChangedData(true)
        }
        if( selectedResume === 'resume5'){
            setChangedData(false)
            setData(Resume5_Data)
            setChangedData(true)
        }
        if( selectedResume === 'resume6' ){
            setChangedData(false)
            setData(Resume6_Data)
            setChangedData(true)
        }
    console.log("data",data)

    }, [params.resume])

  
    const generatePdf = () => {
        const doc = new jsPDF("p", "px", [500, windowHeight]); 
        doc.setFontSize(8);
        let height = doc.internal.pageSize.getHeight();
        let width = doc.internal.pageSize.getWidth();
        if( selectedResume === 'resume1'){
            doc.html(ReactDOMServer.renderToString(<Resume1 summaryHtml={summaryHtml}  data={data} height={height} width={width}  hideLevel={hideLevel}  borderRadius={round ? "50%" : 0}/>), {
                x: 0,
                y: 0,
                callback: function (doc) {
                  doc.deletePage(2)
                  doc.save('sample.pdf');
                },
                width: 650, // <- here
                windowWidth: 650, // <- here
              });
        } else
        if( selectedResume === 'resume2'){
            doc.html(ReactDOMServer.renderToString(<Resume2 summaryHtml={summaryHtml} data={data} height={height} width={width}  hideLevel={hideLevel} />), {
                x: 0,
                y: 0,
                callback: function (doc) {
                  doc.deletePage(2)
                  doc.save('sample.pdf');
                },
                width: 650, // <- here
                windowWidth: 650, // <- here
              });
        } else
        if( selectedResume === 'resume3'){
            doc.html(ReactDOMServer.renderToString(<Resume3 achievementsHtml={achievementsHtml} summaryHtml={summaryHtml} projectsHtml={projectsHtml} data={data} height={height} width={width}  hideLevel={hideLevel}  borderRadius={round ? "50%" : 0}/>), {
                x: 0,
                y: 0,
                callback: function (doc) {
                  doc.deletePage(2)
                  doc.save('sample.pdf');
                },
                width: 650, // <- here
                windowWidth: 650, // <- here
              });
        } else
        if( selectedResume === 'resume4'){
            doc.html(ReactDOMServer.renderToString(<Resume4 data={data} height={height} width={`calc(${width} - 100px)`} showSections={showSections} hideLevel={hideLevel}  summaryHtml={summaryHtml}/>), {
                x: 0,
                y: 0,
                callback: function (doc) {
                  doc.deletePage(2)
                  doc.save('sample.pdf');
                },
                width: 650, // <- here
                windowWidth: 650, // <- here
              });
        } else
        if( selectedResume === 'resume5'){
            doc.html(ReactDOMServer.renderToString(<Resume5 data={data} height={height} width={`calc(${width} - 100px)`} volunteerHtml={volunteerHtml}  summaryHtml={summaryHtml} />), {
                x: 0,
                y: 0,
                callback: function (doc) {
                  doc.deletePage(2)
                  doc.save('sample.pdf');
                },
                width: 650, // <- here
                windowWidth: 650, // <- here
              });
        } else
        if( selectedResume === 'resume6'){
            doc.html(ReactDOMServer.renderToString(<Resume6 achievementsHtml={achievementsHtml} data={data} height={height} width={`calc(${width} - 100px)`} showSections={showSections} hideLevel={hideLevel} summaryHtml={summaryHtml}/>), {
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
    }


    return changedData && (

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
            {cropper && 
                <div className='imagecropper'>
                    <ImageCropper image={data.PersonalInfo.profile} /> 
                </div>
            }

            <div className='flex body space'>
                <div className='c1'>
                    <div className='row1'>
                        <p className='flex resumename'>
                            <input type="text" className="" value={resumeName} onChange={(e) => setResumeName(e.target.value)}/>
                            <img alt='' src={edit} />
                        </p>
                        <select>
                            <option>English</option>
                        </select>
                    </div>
                    <div className='row2'>
                        <div className='Menu'>
                            <SortableMenu items={MenuItems}/>
                        </div>
                        <div className='inputs'>
                            {  data.showSections.PersonalInfo && 
                                <div id='personal'>
                                    <EditableSection title={"Personal Info"} onDelete={() => onPersonalDelete("PersonalInfo")} PeronalInfo/>
                                    <PersonalInfoSection 
                                        onPersonalChange={onPersonalChange} 
                                        data={data} 
                                        setAdditionalButtons={setAdditionalButtons}
                                        AdditionalButtons={AdditionalButtons}
                                    />
                                    <button 
                                        className='add_button' 
                                        onClick={() => setShowAddButtons(!showAddButtons)}
                                    > 
                                        Add Additional Details
                                        <img 
                                            alt='' 
                                            src={additionalButton}  
                                            style={{transform: showAddButtons ? "rotate(180deg" : "rotate(0)" }}
                                        />
                                    </button>   
                                    {
                                        showAddButtons &&

                                        <div className='AdditionalButtons_Container'>
                                            {
                                                Object.keys(AdditionalButtons).map((keyName, i) => 
                                                    <AdditionalButton 
                                                        item={[keyName]} 
                                                        show={AdditionalButtons[keyName]}
                                                        key={i} 
                                                        setAdditionalButtons={setAdditionalButtons} 
                                                        AdditionalButtons={AdditionalButtons}
                                                    />
                                                )
                                            }  
                                        </div>
                                    }
                                </div>
                            }
                            {  showSections.Summary && 
                                <div id='summary'>
                                    <EditableSection title={"Professional Summary"} onDelete={() => onPersonalDelete("Summary")}/>
                                    <TipEditor summary={data.PersonalInfo.summary} setSummaryHtml={setSummaryHtml} expand={summaryExpand} setExpand={setSummaryExpand}/>
                                </div>
                                    
                            }
                     

                            { showSections.workExperience &&
                                <div id='workExperience'>
                                    <EditableSection 
                                        title={"Work Experience"} 
                                        onDelete={
                                            () => onArrayDelete(
                                                "workExperience", 
                                                data.workExperience, 
                                            )
                                        }
                                    />
                                   <SortableWorkList items={items} onSortEnd={onSortEnd} onArrayChange={onArrayChange} onExperienceDelete={onExperienceDelete}/>

                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.workExperience, "workExperience")}
                                    > 
                                        + Add More Position
                                    </button>
                                </div>
                            }
                            {   showSections.Education &&
                                <div id='Education'>
                                    <EditableSection 
                                        title={"Education"} 
                                        onDelete={
                                            () => onArrayDelete(
                                                "Education", 
                                                data.Education,
                                            )
                                        }
                                    />
                                    { data.Education.map((e, index) => 
                                        <EducationSection 
                                        Education={data.Education}  
                                        onArrayChange={onArrayChange} 
                                        index={index} 
                                        key={index}  
                                        />
                                    )}
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.Education, "Education")}
                                    > 
                                        + Add More Education
                                    </button>
                                </div>
                            }
                            {   showSections.Volunteer &&
                                <div id='Volunteer'>
                                    <EditableSection 
                                        title={"Volunteer"} 
                                        onDelete={
                                            () => onArrayDelete(
                                                "Volunteer", 
                                                data.Volunteer,
                                            )
                                        }
                                    />
                                    { data.Volunteer.map((e, index) => 
                                        <VolunteerSection 
                                        Volunteer={data.Volunteer}  
                                        onArrayChange={onArrayChange} 
                                        index={index} 
                                        key={index}  
                                        />
                                    )}
                                    <TipEditor summary={data.Volunteer.description} setSummaryHtml={setVolunteerHtml} expand={volunteerExpand} setExpand={setVolunteerExpand}/>

                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.Volunteer, "Volunteer")}
                                    > 
                                        + Add More Education
                                    </button>
                                </div>
                            }
                            { showSections.Skills &&
                                <div id='Skills'>
                                    <EditableSection title={"Skills"} onDelete={() => onArrayDelete("Skills", data.Skills)}/>
                                    { data.Skills.map((e, index) => 
                                        <SkillsSection 
                                        onArrayChange={onArrayChange} 
                                        Skills={data.Skills} 
                                        j={index}
                                        key={index}
                                        hideLevel={hideLevel}
                                    />
                                    )}
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.Skills, "Skills")}
                                    > 
                                        + Add More Skill
                                    </button>
                                    <p className='flex inputRow' onClick={() => setHideLevel(!hideLevel)}>
                                        {hideLevel ? <img alt="" src={checkbox} className="checked" /> : <span className='checkbox'/>}
                                        Hide Level
                                    </p>
                                </div>
                            }
                            { showSections.ProfessionalSkills &&
                                <div id='ProfessionalSkills'>
                                    <EditableSection title={"Professional Skills"} onDelete={() => onArrayDelete("ProfessionalSkills", data.ProfessionalSkills)}/>
                                    <div className='flex space inputRow'>

                                        { data.ProfessionalSkills.map((e, index) => 
                                            <ProfessionalSkillsSection 
                                            onArrayChange={onArrayChange} 
                                            ProfessionalSkills={data.ProfessionalSkills} 
                                            j={index}
                                            key={index}
                                        />
                                        )}
                                    </div>
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.ProfessionalSkills, "Skills")}
                                    > 
                                        + Add More Skill
                                    </button>
                                </div>
                            }
                            {   showSections.Certification &&
                                <div id='Certification'>
                                    <EditableSection title={"Certifications & Awards"} onDelete={() => onArrayDelete("Certification", data.Certification)}/>
                                    { data.Certification.map((e, index) => 
                                        <CertificationSection 
                                        onArrayChange={onArrayChange} 
                                        data={data} 
                                        index={index}
                                        key={index}
                                    />
                                    )}
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.Certification, "Certification")}
                                    > 
                                        + Add More Certification
                                    </button>
                                </div>
                            }
                            {   showSections.Organization &&
                                <div id='Organization'>
                                    <EditableSection title={"Organization"} onDelete={() => onArrayDelete( "Organization", data.Organization)}/>
                                    { data.Organization.map((e, index) => 
                                        <OrganizationSection 
                                        onArrayChange={onArrayChange} 
                                        Organization={data.Organization} 
                                        index={index}x
                                        key={index}
                                    />
                                    )}
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.Organization, "Organization")}
                                    > 
                                        + Add More Organization
                                    </button>
                                </div>
                            }
                            {   showSections.Language &&
                                <div id='Language'>
                                    <EditableSection title={"Language"} onDelete={() => onArrayDelete("Language", data.Language)}/>
                                    { data.Language.map((e, index) => 
                                        <LanguageSection 
                                            onArrayChange={onArrayChange} 
                                            Language={data.Language} 
                                            j={index}
                                            key={index}
                                        />
                                    )}
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.Language, "Language")}
                                    > 
                                        + Add More Language
                                    </button>
                                </div>
                            }
                            {   showSections.References &&
                                <div id='References'>
                                    <EditableSection title={"References"} onDelete={() => onArrayDelete( "References", data.References)}/>
                                    { data.References.map((ref, index) => 
                                        <ReferenceSection 
                                            onArrayChange={onArrayChange} 
                                            data={data} 
                                            index={index}
                                            key={index}
                                        />
                                    )}
                                    <button 
                                    className='add_button' 
                                    onClick={() => addMore(data.References, "References")}
                                    > 
                                        + Add More References
                                    </button>
                                </div>
                            }
                            { showSections.Achievements &&
                                <div>
                                    <EditableSection title={"Achievements"} onDelete={() => onArrayDelete( "Achievements", data.Achievements)}/>
                                    <TipEditor summary={data.Achievements} setSummaryHtml={setAchievementsHtml} expand={achievementsExpand} setExpand={setAchievementsExpand}/>
                                </div>
                            }
                            { showSections.Projects &&
                                <div>
                                    <EditableSection title={"Projects"} onDelete={() => onArrayDelete( "Projects", data.Projects)}/>
                                    <TipEditor summary={data.Projects} setSummaryHtml={setProjectsHtml} expand={projectsExpand} setExpand={setProjectsExpand}/>
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
                    {   selectedResume === 'resume1'
                        ? <Resume1
                            data={data}  
                            width={"450px"} 
                            height="auto" 
                            hideLevel={hideLevel} 
                            borderRadius={round ? "50%" : 0}
                            setWindowHeight={setWindowHeight}
                            summaryHtml={summaryHtml}
                        />
                        : selectedResume === 'resume2' 
                        ? <Resume2
                            data={data}  
                            grid={"30% 70%"} 
                            width={"450px"} 
                            height="auto" 
                            hideLevel={hideLevel} 
                            borderRadius={round ? "50%" : 0}
                            setWindowHeight={setWindowHeight}
                            summaryHtml={summaryHtml}

                        />
                        : selectedResume === 'resume3' 
                        ? <Resume3
                            data={data}  
                            grid={"30% 70%"} 
                            width={"400px"} 
                            height="auto" 
                            hideLevel={hideLevel} 
                            borderRadius={round ? "50%" : 0}
                            summaryHtml={summaryHtml}
                            achievementsHtml={achievementsHtml}
                            projectsHtml={projectsHtml}
                            setWindowHeight={setWindowHeight}
                        />
                        : selectedResume === 'resume4' 
                        ? <Resume4
                            data={data}  
                            grid={"30% 70%"} 
                            width={"450px"} 
                            showSections={showSections} 
                            height="auto" 
                            hideLevel={hideLevel} 
                            borderRadius={round ? "50%" : 0}
                            summaryHtml={summaryHtml}
                            setWindowHeight={setWindowHeight}
                        />
                        : selectedResume === 'resume5' 
                        ? <Resume5
                            data={data}  
                            grid={"30% 70%"} 
                            width={"450px"} 
                            height="auto" 
                            hideLevel={hideLevel} 
                            borderRadius={round ? "50%" : 0}
                            setWindowHeight={setWindowHeight}
                            summaryHtml={summaryHtml}
                            volunteerHtml={volunteerHtml}
                        />
                        : selectedResume === 'resume6' 
                        ? <Resume6
                            data={data}  
                            grid={"30% 70%"} 
                            width={"450px"} 
                            height="auto" 
                            hideLevel={hideLevel} 
                            borderRadius={round ? "50%" : 0}
                            achievementsHtml={achievementsHtml} 
                            setWindowHeight={setWindowHeight}
                            summaryHtml={summaryHtml}
                        />
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default UserInput