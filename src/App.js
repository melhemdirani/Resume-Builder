import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { DndProvider, useDrop } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import './App.scss';
import { EditorContext } from './components/EditorContext';
import Homepage from './pages/Homepage/Homepage';
import UserInput from './pages/UserInput/UserInput';
import { Resume1_Data, Resume2_Data, Resume3_Data, Resume4_Data, Resume5_Data, Resume6_Data } from './assets/data';
import ImageCropper from './components/ImageCropper/ImageCropper';
import resume from './assets/images/Resume2.png'
import Resume5 from './components/Resume5/Resume5';


const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {

  const [ data, setData ] = useState( 
    Resume1_Data
  )
  const [image, setImage] = useState()
  const [round, setRound] = useState(false)
  const [cropper, setCropper] = useState(false)
  const [summaryHtml, setSummaryHtml] = useState()
  const [summary, setSummary] = useState("")


  const onImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const [showAdditional, setShowAdditional] = useState({
    LinkedIn: true,
    Twitter: true,
    Nationality: true,
    Country: false,
    DrivingLicense: false,
    PlaceOfBirth : false,
    DateOfBirth: false,
    CustomField: false
  })

  const AddPeronalInfo = (e) => {
    const {name, value } = e.target
    setData(data => ({
        ...data,
        PersonalInfo:{ 
            ...data.PersonalInfo, 
            additionalInfo: {
                ...data.PersonalInfo.additionalInfo,
                [name]: value
            }
        }
    }))
  }

  const providerValue = useMemo(() => ({ 
    showAdditional,
    setShowAdditional,
    data, 
    setData, 
    image, 
    setImage, 
    onImageChange, 
    round, 
    setRound, 
    cropper, 
    setCropper,
    AddPeronalInfo,
    summaryHtml,
    setSummaryHtml,
    summary,
    setSummary
  }), [
    showAdditional,
    setShowAdditional,
    data, 
    setData, 
    image, 
    setImage, 
    onImageChange, 
    round, 
    setRound, 
    AddPeronalInfo,
    summaryHtml,
    setCropper,
    setSummaryHtml,
    summary,
    setSummary
  ])


  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <Wrapper>
        <EditorContext.Provider value={providerValue}>
          <Routes>
              <Route path="" element={<Homepage />} />
              <Route path="editor/:resume" element={<UserInput />} />
              <Route path="crop-image" element={<ImageCropper image={resume} />} />
          </Routes>
          </EditorContext.Provider>
        </Wrapper>
      </div>
    </DndProvider>

  );
}

export default App;
