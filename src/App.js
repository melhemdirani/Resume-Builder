import React, { useLayoutEffect, useMemo, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import { DndProvider, useDrop } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import './App.scss';
import { EditorContext } from './components/EditorContext';
import Homepage from './pages/Homepage/Homepage';
import UserInput from './pages/UserInput/UserInput';
import { Resume1_Data } from './assets/data';
import ExpandedEditor from './pages/ExpandedEditor/ExpandedEditor';
import ImageCropper from './components/ImageCropper/ImageCropper';
import resume from './assets/images/Resume2.png'


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



  const onImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const content = ContentState.createFromText(data.PersonalInfo.summary);

  const [profSummary, setProfSummary]= useState(() => EditorState.createWithContent(content))

  const providerValue = useMemo(() => ({ 
    profSummary, 
    setProfSummary, 
    data, 
    setData, 
    image, 
    setImage, 
    onImageChange, 
    round, 
    setRound, 
    cropper, 
    setCropper
  }), [
    profSummary, 
    setProfSummary, 
    data, 
    setData, 
    image, 
    setImage, 
    onImageChange, 
    round, 
    setRound, 
    setCropper
  ])


  return (
    <DndProvider backend={HTML5Backend}>

    <div className='App'>
      <Wrapper>
      <EditorContext.Provider value={providerValue}>
        <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="editor" element={<UserInput />} />
            <Route path="ExpandedEditor" element={<ExpandedEditor />} />
            <Route path="crop-image" element={<ImageCropper image={resume} />} />
        </Routes>
        </EditorContext.Provider>

      </Wrapper>
    </div>
    </DndProvider>

  );
}

export default App;
