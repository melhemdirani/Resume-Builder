import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.scss';
import Homepage from './pages/Homepage/Homepage';
import UserInput from './pages/UserInput/UserInput';


const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div className='App'>
      <Wrapper>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="editor" element={<UserInput />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
