
import resume1_profile from './images/resume1_profile.png';
import profile from './images/primary_photo.png'
import userImage from './images/image.png'

export const PrimaryResume_Data = {
    showSections:{
        workExperience: true,
        Education: true,
        Skills: true,
        Certification: false,
        Organization: false,
        Language: true,
        References: false,
        PersonalInfo: true,
        Summary: true,
        Projects: false,
        Achievements: true,
        ProfessionalSkills:true,
        Volunteer: false
    },

    workExperience:[
        {
            title: "Senior UI/UX Product Designer Enterprise",
            company: "Enterprise name",
            startDate: "Aug 2018",
            endDate: "Present",
            duration: "1 year",
            description: "Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.",
           
            location: "Paris",
        },
        {
            title: "UI/UX Product Designer",
            company: "Enterprise name",
            startDate: "Aug 2013",
            endDate: "Aug 2018",
            duration: "5 years",
            description:"Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.",
            location: "Paris",
        },
        {
            title: "UI Designer",
            company: "Enterprise name",
            startDate: "Aug 2012",
            endDate: "jul 2013 ",
            duration: "1 year",
            description:"Designed mobile UI applications for Orange R&D departement, BNP Paribas, La Poste, Le Cned...",
            location: "Paris",
        },
        {
            title: "Graphic Designer",
            company: "Enterprise name",
            startDate: "Sept 2010",
            endDate: "jul 2012",
            duration: "2 years",
            description:"Designed print and web applications for Pau Brasil, Renault, Le théatre du Mantois, La mairie de Mantes la Ville...",
            location: "Paris",
        },
    ],
    Education: [
        {
            title: "Bachelor European in Graphic Design",
            company: "School name",
            startDate: "2009",
            endDate: "2010",
            location: "Bagnolet"
        },
        {
            title: "BTS Communication Visuelle option Multimédia",
            company: "School name",
            startDate: "2007",
            endDate: "2009",
            location: "Bagnolet"
        }
    ],
    PersonalInfo: {
        Name: "Your",
        Lastname: "Name",
        profession: "Senior Product Designer",
        place: "Vernouillet",
        email: "yourmail@gmail.com",
        phone: "+33 6 33 33 33",
        profile: profile,

    },
    Skills: [
        {
            name: "Industry Knowledge",
            aligned: false,
            skills: [
                "Product Design",
                "User Interface",
                "User Experience",
                "Interaction Design",
                "Wireframing",
                "Rapid Prototyping",
                "Design Research"
            ]   
        },
        {
            name: "Tools & Technologies",
            aligned: true,
            skills: [
                "Figma",
                "Sketch",
                "Protopie",
                "Framer",
                "Invision",
                "Abstract",
                "Zeplin",
                "Google Analytics",
                "Amplitude",
                "Fullstory"
            ]
        },
        {
            name: "Other Skills",
            aligned: true,
            skills: [
                "HTML",
                "CSS",
                "jQuery"
            ]
        },  
        {
            name: "Languages",
            aligned: true,
            skills: [
                "French (native)",
                "English (professionnal)",
            ]
        },
        {
            name: "Social",
            aligned: false,
            skills: [
                "yoursite.com",
                "linkedin.com/in/yourname",
                "dribbble.com/yourname"
            ]
        },
        
    
    ],
}

export const Resume1_Data = {
    showSections:{
        workExperience: true,
        Education: true,
        Skills: true,
        Certification: true,
        Organization: true,
        Language: true,
        References: false,
        PersonalInfo: true,
        Summary: true,
        Projects: false,
        Achievements: false,
        ProfessionalSkills:false,
        Volunteer: false


    },
    workExperience: [
        {
            title: "Business Development Manager1",
            company: "AirState Solutions",
            startDate: "dec 2018",
            endDate: "jan 2020",
            type: "",
            location: "",
            description: "",
            order: 0,
            id: 0,
            tasks: []
        },
        {
            title: "Business Development Manager2",
            company: "AirState Solutions",
            startDate: "Apr 2018",
            endDate: "Jan 2020",
            description: "",
            type: "",
            location: "",
            order: 1,
            id: 1,
            tasks: []
        },
        {
            title: "Business Development Manager3",
            company: "AirState Solutions",
            startDate: "Apr 2018",
            endDate: "Jan 2020",
            type: "",
            description: "",
            location: "",
            order: 2,
            id: 2,
            tasks: []
        }
    ],
    Education: [
        {
            title: "MSc",
            field: "Economics and Business Administration",
            university: "University of Dhaka",
            startDate: "Sep 2018",
            endDate: "Jun 2020",
            CGPA: "3.80",
            location: "",
            CGPAMax: "4",
            id: 0,
            description:[
                
            ]

        },
        {
            title: "BSc",
            field: "Business Administration",
            university: "University of Dhaka",
            startDate: "Sep 2013",
            endDate: "Jun 2018",
            CGPA: "2.80",
            location: "",
            CGPAMax: "4",
            id: 1,
            description:[
                
            ]
        },
  
        {
            title: "BSc",
            field: "Business Administration",
            university: "University of Dhaka",
            startDate: "Sep 2013",
            endDate: "Jun 2018",
            CGPA: "2.80",
            location: "",
            CGPAMax: "4",
            id: 2,
            description:[
                
            ]
        },
  
    ],
    Certification: [
        {
            title: "User Experience Design",
            year: "2019",
            website: "www.theuserhub.com",
            company: "UserHub",
            id: 0,
        },
        {
            title: "User Interface Design",
            year: "2018",
            website: "www.shikhbeshobai.com",
            company: "Shikhbe Sobai",
            id: 1,

        },
     
    ],
    PersonalInfo: {
        Name: "Jacob",
        Lastname: "Lison",
        profession: "UXUI Designer",
        summary: "I am a UI/UX Designer currently living in Bangladesh.Focused on creating a unique visualconcept through my design. Love quietness. consectetuer",
        place: "Home-20, Road-1, Block-B, Mirpur,Dhaka",
        linkedIn: "Linkedin.com/in/ikayes.design",
        email: "ikayes.designer@gmail.com",
        twitter: "ikayes.design",
        phone: "+8801631455383",
        profile: resume1_profile,
        additionalInfo: {}
        
    },
    Skills: [
        {
            name: "Leadership",
            value: 5,
            id: 0,
        },
        {
            name: "Teamwork",
            id: 1,
            value: 1
        },
        {
            name: "Communication",
            id: 2,
            value: 2
        },
        {
            name: "Problem-Solving",
            id: 3,
            value: 4
        },
        {
            name: "Work Ethic",
            id: 4,
            value: 3
        },
        {
            name: "Flexibility",
            id: 5,
            value: 2
        },
    ],
    Organization: [
        {
            name: "Bidyanondo Foundation",
            position: "Graphic Designer",
            sector: "Children & Education",
            startDate: "Sep 2016",
            endDate: "present",
            id: 0,
        },
        {
            name: "Bidyanondo Foundation",
            position: "Graphic Designer",
            sector: "Children & Education",
            startDate: "Sep 2016",
            endDate: "present",
            id: 1,

        },
    ],
    Language: [
        {
            language: "Bangla",
            level: "Full Professional Proficiency",
            id: 0
        },
        {
            language: "English",
            level: "Native or Bilingual Proficiency",
            id: 1
        },
        {
            language: "Hindi",
            level: "Limited Working Prociciency",
            id: 2
        },
        {
            language: "Spanish",
            level: "Limited Working Prociciency",
            id: 3
        },
    ],
    References: [
       
    ],  
    Projects: "",
    Achievements: ""
}
export const Resume2_Data = {
    showSections:{
        workExperience: true,
        Education: true,
        Skills: true,
        Certification: true,
        Organization: false,
        Language: false,
        References: false,
        PersonalInfo: true,
        Summary: true,
        Projects: false,
        Achievements: false,
        ProfessionalSkills:false,
        Volunteer: false


    },
    workExperience: [
        {
            title: "Administration Assitant",
            company: "AirState Solutions",
            startDate: "dec 2018",
            endDate: "jan 2020",
            type: "",
            location: "Birmingham, AL",
            order: 0,
            id: 0,
            description: "",
            tasks:  [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            ]
        },
        {
            title: "Business Development Manager",
            company: "AirState Solutions",
            startDate: "Apr 2018",
            endDate: "Jan 2020",
            type: "",
            location: "Birmingham, AL",
            order: 1,
            id: 1,   
            description: "",
            tasks:  [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            ]
        },
        {
            title: "Secretary",
            company: "AirState Solutions",
            startDate: "Apr 2018",
            endDate: "Jan 2020",
            type: "",
            location: "Birmingham, AL",
            order: 2,
            id: 2,   
            description: "",
            tasks:  [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]
        },
    ],
    Education: [
        {
            title: "Executive MBA",
            field: "",
            university: "University of Dhaka",
            startDate: "Sep 2018",
            endDate: "Jun 2020",
            CGPA: "3.80",
            CGPAMax: "4",
            location: "London",
            description:[

            ]
        },
        {
            title: "Bachelor of Arts in Finance",
            field: "",
            university: "University of Dhaka",
            startDate: "Sep 2013",
            endDate: "Jun 2018",
            CGPA: "2.80",
            CGPAMax: "4",
            location: "London",
            description:[
                
            ]

        }
    ],
    Certification: [
        {
            title: "User Experience Design",
            year: "2019",
            website: "",
            company: ""
        },
        {
            title: "User Interface Design",
            year: "2018",
            website: "",
            company: ""
        },
        {
            title: "User Interface Design",
            year: "2018",
            website: "",
            company: ""
        },
     
    ],
    PersonalInfo: {
        Name: "Jacob",
        Lastname: "Lison",
        profession: "UXUI Designer",
        summary: "I am a UI/UX Designer currently living in Bangladesh.Focused on creating a unique visualconcept through my design. Love quietness. consectetuer",
        place: "Home-20, Road-1, Block-B, Mirpur,Dhaka",
        linkedIn: "",
        email: "ikayes.designer@gmail.com",
        twitter: "",
        phone: "+8801631455383",
        profile: "",
        additionalInfo: {}
        
    },
    Skills: [
        {
            name: "Leadership",
            value: 5
        },
        {
            name: "Teamwork",
            value: 1
        },
        {
            name: "Communication",
            value: 2
        },
        {
            name: "Problem-Solving",
            value: 4
        },
        {
            name: "Work Ethic",
            value: 3
        },
        {
            name: "Flexibility",
            value: 2
        },
    ],
    Organization: [
        {
            name: "",
            position: "",
            sector: "",
            startDate: "",
            endDate: ""
        },
    ],
    Language: [
        {
            language: "",
            level: ""
        },
    ],
    References: [
        {
            name: "John Goldsmith",
            email: "Goldsmith@regions.com",
            position: "Project Manager",
            company: "Regions Finance",
            phone: "(220) 123-1278",
        },
        {
            name: "Mark Adler",
            email: "Mark@regions.com",
            position: "Project Manager",
            company: "Regions Finance",
            phone: "(220) 123-1278",
        },
    ],
    Projects: "",
    Achievements: ""
}
export const Resume3_Data = {
    showSections:{
        workExperience: true,
        Education: true,
        Skills: true,
        Certification: true,
        Organization: false,
        Language: true,
        References: false,
        PersonalInfo: true,
        Summary: true,
        Projects: true,
        Achievements: true,
        ProfessionalSkills:false,
        Volunteer: false

    },
    workExperience: [
        {
            title: "Business Development Manager1",
            company: "AirState Solutions",
            startDate: "dec 2018",
            endDate: "jan 2020",
            type: "",
            location: "Birmingham, AL",
            order: 0,
            description: "",
            id: 0,
            tasks: [
                "Maintained and organized numerous office files",
                "Constantly updated the company's contact and mailing lists",
                "Monitored ongoing marketing campaings",
                "Monitored press coverage"
            ]
        },
    ],
    Education: [
        {
            title: "Executive MBA",
            field: "",
            university: "University of Dhaka",
            startDate: "Sep 2018",
            endDate: "Jun 2020",
            CGPA: "3.80",
            CGPAMax: "4",
            location: "London",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            ]
        },
    ],
    Certification: [
        {
            title: "User Experience Design",
            year: "2019",
            website: "www.theuserhub.com",
            company: "UserHub"
        },
    ],
    PersonalInfo: {
        Name: "Jacob",
        Lastname: "Lison",
        profession: "UXUI Designer",
        summary: "I am a UI/UX Designer currently living in Bangladesh.Focused on creating a unique visualconcept through my design. Love quietness. consectetuer",
        place: "Home-20, Road-1, Block-B, Mirpur,Dhaka",
        linkedIn: "Linkedin.com/in/ikayes.design",
        email: "ikayes.designer@gmail.com",
        twitter: "ikayes.design",
        phone: "+8801631455383",
        profile: resume1_profile,
        additionalInfo: {}
        
    },
    Skills: [
        {
            name: "Leadership",
            value: 5
        },
        {
            name: "Teamwork",
            value: 1
        },
        {
            name: "Communication",
            value: 2
        },
        {
            name: "Problem-Solving",
            value: 4
        },
        {
            name: "Work Ethic",
            value: 3
        },
        {
            name: "Flexibility",
            value: 2
        },
    ],
    Organization: [
        {
            name: "Bidyanondo Foundation",
            position: "Graphic Designer",
            sector: "Children & Education",
            startDate: "Sep 2016",
            endDate: "present"
        },
        {
            name: "Bidyanondo Foundation",
            position: "Graphic Designer",
            sector: "Children & Education",
            startDate: "Sep 2016",
            endDate: "present"
        },
    ],
    Language: [
        {
            language: "French",
            level: "Advanced"
        },
    ],
    References: [
        {
            name: "John Goldsmith",
            email: "Goldsmith@regions.com",
            position: "Project Manager",
            company: "Regions Finance",
            phone: "(220) 123-1278",
        },
        {
            name: "Mark Adler",
            email: "Mark@regions.com",
            position: "Project Manager",
            company: "Regions Finance",
            phone: "(220) 123-1278",

        },
    ],
    Projects: "-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum.",
    Achievements: "-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum.",
}
export const Resume4_Data = {
    showSections:{
        workExperience: true,
        Education: true,
        Skills: true,
        Certification: true,
        Organization: false,
        Language: false,
        References: true,
        PersonalInfo: true,
        Summary: true,
        Projects: false,
        Achievements: false,
        ProfessionalSkills:true,
        Volunteer: false

    },
    workExperience: [
        {
            title: "Business Development Manager1",
            company: "AirState Solutions",
            startDate: "dec 2018",
            endDate: "jan 2020",
            type: "",
            location: "",
            order: 0,
            id: 0,
            description: "",
            tasks: [
                "Maintained and organized numerous office files",
                "Constantly updated the company's contact and mailing lists",
                "Monitored ongoing marketing campaings",
                "Monitored press coverage"
            ]
        },
        {
            title: "Business Development Manager2",
            company: "AirState Solutions",
            startDate: "Apr 2018",
            endDate: "Jan 2020",
            type: "",
            location: "",
            order: 1,
            id: 1,
            tasks: [
                "Maintained and organized numerous office files",
                "Constantly updated the company's contact and mailing lists",
                "Monitored ongoing marketing campaings",
                "Monitored press coverage"
            ]
        }
    ],
    Education: [
        {
            title: "MSc",
            field: "Economics and Business Administration",
            university: "University of Dhaka",
            startDate: "Sep 2018",
            endDate: "Jun 2020",
            CGPA: "",
            CGPAMax: "",
            description:[]
        }
    ],
    Certification: [
        {
            title: "User Experience Design",
            year: "2019",
            website: "",
            company: "UserHub"
        },
        {
            title: "User Experience Design",
            year: "2019",
            website: "",
            company: "UserHub"
        },
    ],
    References: [
        {
            name: "Carl",
            email: "carl@apple.com",
            position: "Project Manager",
        },
        {
            name: "Carl",
            email: "carl@apple.com",
            position: "Project Manager",
        },
        {
            name: "Carl",
            email: "carl@apple.com",
            position: "Project Manager",
        },
    ],
    PersonalInfo: {
        Name: "Jacob",
        Lastname: "Lison",
        profession: "UXUI Designer",
        summary: "I am a UI/UX Designer currently living in Bangladesh.Focused on creating a unique visualconcept through my design. Love quietness. consectetuer",
        place: "Home-20, Road-1, Block-B, Mirpur,Dhaka",
        linkedIn: "",
        email: "ikayes.designer@gmail.com",
        twitter: "",
        phone: "+8801631455383",
        profile: "",
        website: "www.website.com",
        additionalInfo: {}
        
    },
    Skills: [
        {
            name: "Leadership",
            value: null,
        },
        {
            name: "Teamwork",
            value: null
        },
        {
            name: "Communication",
            value: null
        },
        {
            name: "Problem-Solving",
            value: null
        },
        {
            name: "Work Ethic",
            value: null
        },
        {
            name: "Flexibility",
            value: null
        },
    ],
    ProfessionalSkills: [
        {
            name: "Copywriting",
            value: null,
        },
        {
            name: "SEO",
            value: null
        },
        {
            name: "Team management",
            value: null
        },
        {
            name: "Market Research",
            value: null
        },
        {
            name: "Network Expert",
            value: null
        },
        {
            name: "Project management",
            value: null
        },
    ],
    Organization: [
        {
            name: "s",
            position: "s",
            sector: "s",
            startDate: "s",
            endDate: "s"
        },
    ],
    Language: [
        {
            language: "",
            level: ""
        },
    ]
}
export const Resume5_Data = {
    showSections:{
        workExperience: true,
        Education: true,
        Skills: true,
        Certification: true,
        Organization: false,
        Language: false,
        References: false,
        PersonalInfo: true,
        Summary: true,
        Projects: false,
        Achievements: false,
        ProfessionalSkills:false,
        Volunteer: true
    },
    workExperience: [
        {
            title: "Business Development Manager1",
            company: "Smith Elementary",
            startDate: "dec 2018",
            endDate: "jan 2020",
            type: "",
            location: "West School District",
            order: 0,
            id: 0,
            description: "",
            tasks: [
                "Maintained and organized numerous office files, Maintained and organized numerous office files, Maintained and organized numerous office files",
                "Constantly updated the company's contact and mailing lists",
                "Monitored ongoing marketing campaings",
                "Monitored press coverage",
                "Monitored press coverage",
            ],
        },
        {
            title: "Business Development Manager1",
            company: "Smith Elementary",
            startDate: "dec 2018",
            endDate: "jan 2020",
            type: "",
            location: "West School District",
            order: 1,
            id: 1,
            tasks: [
                "Maintained and organized numerous office files",
                "Constantly updated the company's contact and mailing lists",
                "Monitored ongoing marketing campaings",
                "Monitored press coverage"
            ]
        },
        {
            title: "Business Development Manager1",
            company: "Smith Elementary",
            startDate: "dec 2018",
            endDate: "jan 2020",
            type: "",
            location: "West School District",
            order: 2,
            id: 2,
            tasks: [
                "Maintained and organized numerous office files",
                "Constantly updated the company's contact and mailing lists",
                "Monitored ongoing marketing campaings",
                "Monitored press coverage"
            ]
        },
       
    ],
    Education: [
        {
            title: "MSc",
            field: "Economics and Business Administration",
            university: "University of Dhaka",
            startDate: "Sep 2018",
            endDate: "Jun 2020",
            CGPA: "",
            CGPAMax: "",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor."
            ]
        }
    ],
    Volunteer: [
        {
            org: "Big Brothers, Big Sisters",
            startDate: "Sep 2018",
            endDate: "Jun 2020",
            role: "Active Volunteer",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        }
    ],
    Certification: [
        {
            title: "User Experience Design",
            year: "2019",
            website: "",
            company: "UserHub"
        },
        {
            title: "User Experience Design",
            year: "2019",
            website: "",
            company: "UserHub"
        },
    ],
    References: [
        {
            name: "Carl",
            email: "carl@apple.com",
            position: "Project Manager",
        },
        {
            name: "Carl",
            email: "carl@apple.com",
            position: "Project Manager",
        },
        {
            name: "Carl",
            email: "carl@apple.com",
            position: "Project Manager",
        },
    ],
    PersonalInfo: {
        Name: "Jacob",
        Lastname: "Lison",
        profession: "UXUI Designer",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        place: "",
        linkedIn: "linkedin.com",
        email: "ikayes.designer@gmail.com",
        twitter: "twitter.com",
        phone: "+8801631455383",
        profile: "",
        website: "www.website.com",
        additionalInfo: {}
        
    },
    Skills: [
        {
            name: "Leadership",
            value: 3,
        },
        {
            name: "Teamwork",
            value: 4
        },
        {
            name: "Communication",
            value: 5
        },
        {
            name: "Problem-Solving",
            value: 2
        },
        {
            name: "Work Ethic",
            value: 1
        },
        {
            name: "Flexibility",
            value: 3
        },
    ],
    ProfessionalSkills: [
        {
            name: "Copywriting",
            value: null,
        },
        {
            name: "SEO",
            value: null
        },
        {
            name: "Team management",
            value: null
        },
        {
            name: "Market Research",
            value: null
        },
        {
            name: "Network Expert",
            value: null
        },
        {
            name: "Project management",
            value: null
        },
    ],
    Organization: [
        {
            name: "",
            position: "",
            sector: "",
            startDate: "",
            endDate: ""
        },
    ],
    Language: [
        {
            language: "",
            level: ""
        },
    ]
}

export const Resume6_Data = {
    showSections:{
        workExperience: false,
        Education: true,
        Skills: true,
        Certification: true,
        Organization: false,
        Language: true,
        References: false,
        PersonalInfo: true,
        Summary: true,
        Projects: false,
        Achievements: true,
        ProfessionalSkills:true,
        Volunteer: false
    },
    workExperience:[

    ],
    Organization:[

    ],
    Skills:[
        {
            name: "lorem",
            value: 4
        },
        {
            name: "dolor sit",
            value: 3
        },
        {
            name: "ipsum dolo",
            value: 5
        },
        {
            name: " consectetuer",
            value: 5
        },
        {
            name: "amet. consectetuer",
            value: 4
        },
        {
            name: "adipiscing elits",
            value: 4
        }
    ],
    Certification: [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            year: "",
            website: "",
            company: ""
        },
        {
            title: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            year: "",
            website: "",
            company: ""
        },
        {
            title: "ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
            year: "",
            website: "",
            company: ""
        }
    ],
    ProfessionalSkills: [
        {
            name: "Lorem ipsum dolor",
            value: null
        },
        {
            name: "sit amet, consectetur",
            value: null
        },
        {
            name:  "nisi ut aliquip",
            value: null
        },
        {
            name:  "Duis aute irure",
            value: null
        },
       
    ],
    Language: [
        {
            language: "English",
            level: ""
        },
        {
            language: "German",
            level: ""
        },
    ],
    PersonalInfo: {
        Name: "Your",
        Lastname: "Name",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum. Integer non ipsum arcu. In hac habitasse platea dictumst.",
        profession: "",
        place: "Melbourne, Australia",
        linkedIn: "",
        email: "nfo@mycvdesigner.com",
        twitter: "",
        phone: "+91 933-092-9083",
        profile: userImage,
        website: "www.website.com",
        additionalInfo: {},
        birthday: "19ᵗʰ July, 1998"
    },
    Education: [
        {
            title: "Course",
            field: "",
            university: "University",
            place: "Place",
            startDate: "",
            endDate: "Year of Passing",
            CGPA: "",
            CGPAMax: "",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum.",
                "Integer non ipsum arcu. In hac habitasse platea dictumst. Fusce posuere dolor est, eget mollis orci tempus nec.",
                "Maecenas non mattis urna, sed tristique neque. Curabitur augue sapien."
            ]
        },
       
        {
            title: "Course",
            field: "",
            university: "University",
            place: "Place",
            startDate: "",
            endDate: "Year of Passing",
            CGPA: "",
            CGPAMax: "",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum.",
                "Integer non ipsum arcu. In hac habitasse platea dictumst. Fusce posuere dolor est, eget mollis orci tempus nec.",
                "Maecenas non mattis urna, sed tristique neque. Curabitur augue sapien."
            ]
        }
       
    ],
    Achievements: "- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio tortor, venenatis at convallis eget, maximus at ipsum.",

    
}


