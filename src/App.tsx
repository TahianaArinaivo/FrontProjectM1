import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainLayoutContainer from './components/adminUser/main-layout-containers/main-layout-container'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './components/publicUser/HomePage'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Register from './components/publicUser/Register/register'

function App() {

  return (
    <RecoilRoot>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/utilisateur/*' element={<HomePage/>}></Route>
          <Route path="/utilisateur/register" element={<Register />}></Route>
          <Route path='/admin/*' element={<MainLayoutContainer/>}></Route>
        </Routes>
    </RecoilRoot>
  )
}

export default App
