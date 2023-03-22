import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainLayoutContainer from './containers/main-layout-container'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './components/publicUser/HomePage'

function App() {

  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/utilisateur/*' element={<HomePage/>}></Route>
          <Route path='/admin/*' element={<MainLayoutContainer/>}></Route>
        </Routes>
      
    </div>
  )
}

export default App
