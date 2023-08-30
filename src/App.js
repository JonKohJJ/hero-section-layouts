import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.scss'

// Components
import Navigation from './Components/Navigation/Navigation.js'
import Home from './Components/Home/Home.js'

import Layout01 from './Components/Layouts/Layout01/Layout01.js'
import Layout02 from './Components/Layouts/Layout02/Layout02.js'

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
          <Route path='/typography' element={<Typography />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
