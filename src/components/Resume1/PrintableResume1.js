import React from 'react';
import { 
    WorkContainer, 
    EducationContainer, 
    CertificationContainer, 
    PersonalContainer,
    SocialMediaContainer,
    SkillsContainer,
    OrganizationContainer,
    LanguageContainer
} from './Containers';

export default PrintableResume1 =  () => {
    return(
       <div className="resume-pdfCol">
           <div className="resume-preview resume-pdf">
               <Row>
                   <div style={{width: "30%"}}>
                       <div className="profile-basic">
                           <div className="profile-photo">
                               <img src={userImage} className="img-fluid" alt="profile" />
                           </div>
                           <div className="profile-info">
                               <div className="work-experience">
                                   <h4>Work Experience</h4>

                                   <div className="work-outline">
                                       <h5 className="work-title">Business Manager</h5>
                                       <p className="company">Airstate Solution</p>
                                       <p className="work-duration">Apr 2018 - Jan 2020</p>
                                   </div>

                                   <div className="work-outline">
                                       <h5 className="work-title">Business Manager</h5>
                                       <p className="company">Airstate Solution</p>
                                       <p className="work-duration">Apr 2018 - Jan 2020</p>
                                   </div>

                                   <div className="work-outline">
                                       <h5 className="work-title">Business Manager</h5>
                                       <p className="company">Airstate Solution</p>
                                       <p className="work-duration">Apr 2018 - Jan 2020</p>
                                   </div>
                               </div>

                               <div className="education">
                                   <h4>Education</h4>

                                   <div className="edu-outline">
                                       <h5 className="edu-title">Masters in Computer Science</h5>
                                       <p className="edu-uni">Airstate Solution</p>
                                       <p className="edu-date">Apr 2018 - Jan 2020</p>
                                       <p className="edu-cgpa">3.80 of 4.00</p>
                                   </div>

                                   <div className="edu-outline">
                                       <h5 className="edu-title">Bachelors in Science</h5>
                                       <p className="edu-uni">Airstate Solution</p>
                                       <p className="edu-date">Apr 2018 - Jan 2020</p>
                                       <p className="edu-cgpa">3.80 of 4.00</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div style={{width:"70%"}}>
                       <div className="profile-detail">
                           <div className="detail-basic">
                               <h3 className="prof-name">{name.firstname} {name.lastname}</h3>
                               <h5 className="prof-design">{role}</h5>

                               <p className="profile-desc">I am a UI/UX Designer currently living in Bangladesh. <br/>
                                   Focused on creating a unique visualconcept through <br/>
                                   my design. Love quietness. consectetuer adipiscing elit, <br/> 
                                   sed diam nonummy </p>

                               <ul className="social-list nav row">
                                   <li className="col-sm-12">
                                       <i className="icon"><img src={linkedInIcon} alt="linkedin-icon" /></i>
                                       <span className="info">{address}</span>
                                   </li>
                                   <div className="col-sm-6">
                                       <i className="icon"><img src={linkedInIcon} alt="linkedin-icon" /></i>
                                       <span className="info">Social link</span>
                                   </div>
                                   <div className="col-sm-6">
                                       <i className="icon"><img src={twitterIcon} alt="linkedin-icon" /></i>
                                       <span className="info">@design</span>
                                   </div>
                                   <div className="col-sm-6">
                                       <i className="icon"><img src={emailIcon} alt="linkedin-icon" /></i>
                                       <span className="info"> {email} </span>
                                   </div>
                                   <div className="col-sm-6">
                                       <i className="icon"><img src={phoneIcon} alt="linkedin-icon" /></i>
                                       <span className="info"> {phone} </span>
                                   </div>
                               </ul>

                               <div className="skill-section">
                                   <h3 className="section-title">Skill</h3>

                                   <div className="skill-item">
                                       <p style={{width:"30%"}}>Leadership</p>
                                       <div className="skill-rate">
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                       </div>
                                   </div>
                                   <div className="skill-item">
                                       <p style={{width:"30%"}}>Teamwork</p>
                                       <div className="skill-rate">
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                       </div>
                                   </div>
                                   <div className="skill-item">
                                       <p style={{width:"30%"}}>Communication</p>
                                       <div className="skill-rate">
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                       </div>
                                   </div>
                                   <div className="skill-item">
                                       <p style={{width:"30%"}}>Work Ethic</p>
                                       <div className="skill-rate">
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                       </div>
                                   </div>
                                   <div className="skill-item">
                                       <p style={{width:"30%"}}>Flexibility</p>
                                       <div className="skill-rate">
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq sq-fill"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                           <div className="sq"></div>
                                       </div>
                                   </div>
                               </div>

                               <div className="organization-section">
                                   <h3 className="section-title">Organization</h3>

                                   <div className="org-item">
                                       <h4 className="org-name">Bidyanondo Foundation</h4>
                                       <p>Graphic Designer</p>
                                       <p>Children & Education</p>
                                       <p>Sep 2016 - Present</p>
                                   </div>

                                   <div className="org-item">
                                       <h4 className="org-name">Bidyanondo Foundation</h4>
                                       <p>Graphic Designer</p>
                                       <p>Children & Education</p>
                                       <p>Sep 2016 - Present</p>
                                   </div>

                                   <div className="org-item">
                                       <h4 className="org-name">Bidyanondo Foundation</h4>
                                       <p>Graphic Designer</p>
                                       <p>Children & Education</p>
                                       <p>Sep 2016 - Present</p>
                                   </div>

                                   <div className="org-item">
                                       <h4 className="org-name">Bidyanondo Foundation</h4>
                                       <p>Graphic Designer</p>
                                       <p>Children & Education</p>
                                       <p>Sep 2016 - Present</p>
                                   </div>

                               </div>

                           </div>
                       </div>
                   </div>
               </Row>
           </div> 
       </div>
    )
 };