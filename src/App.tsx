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
import Register from './components/publicUser/Register/register';
import Dashboard from './components/publicUser/DashBoard/Dashboard';
import AuthenticationUser from './components/adminUser/Authentification/AuthenticationUser';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient()


function App() {

  return (
   <QueryClientProvider  client={queryClient}>
     <RecoilRoot>
        <Routes>
          <Route path='/authentication' element={<AuthenticationUser/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/utilisateur/*' element={<HomePage/>}></Route>
          <Route path="/utilisateur/register" element={<Register />}></Route>
          <Route path='/utilisateur/dashboard/*' element={<Dashboard/>}></Route>
          <Route path='/admin/*' element={<MainLayoutContainer/>}></Route>
        </Routes>
    </RecoilRoot>
   </QueryClientProvider>
  )
}

export default App
