import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.scss'

// Components
import Navigation from './Components/Navigation/Navigation.js'
import Home from './Components/Home/Home.js'

import Layout01 from './Components/Layouts/Layout01/Layout01.js'
import Layout02 from './Components/Layouts/Layout02/Layout02.js'
import Layout03 from './Components/Layouts/Layout03/Layout03.js'
import Layout04 from './Components/Layouts/Layout04/Layout04.js'
import Layout05 from './Components/Layouts/Layout05/Layout05.js'
import Layout06 from './Components/Layouts/Layout06/Layout06.js'
import Layout07 from './Components/Layouts/Layout07/Layout07.js'
import Layout08 from './Components/Layouts/Layout08/Layout08'
import Layout09 from './Components/Layouts/Layout09/Layout09'
import Layout10 from './Components/Layouts/Layout10/Layout10'
import Layout11 from './Components/Layouts/Layout11/Layout11.js'
import Layout12 from './Components/Layouts/Layout12/Layout12'

import Typography from './Components/Typograhpy/Typography.js'
import Error from './Components/Error/Error.js'

function App() {
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/layout01' element={<Layout01 />}></Route>
          <Route path='/layout02' element={<Layout02 />}></Route>
          <Route path='/layout03' element={<Layout03 />}></Route>
          <Route path='/layout04' element={<Layout04 />}></Route>
          <Route path='/layout05' element={<Layout05 />}></Route>
          <Route path='/layout06' element={<Layout06 />}></Route>
          <Route path='/layout07' element={<Layout07 />}></Route>
          <Route path='/layout08' element={<Layout08 />}></Route>
          <Route path='/layout09' element={<Layout09 />}></Route>
          <Route path='/layout10' element={<Layout10 />}></Route>
          <Route path='/layout11' element={<Layout11 />}></Route>
          <Route path='/layout12' element={<Layout12 />}></Route>
          <Route path='/typography' element={<Typography />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
