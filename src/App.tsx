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
import Register from './components/publicUser/Register/Register';
import Dashboard from './components/publicUser/DashBoard/Dashboard';
import AuthenticationUser from './components/adminUser/Authentification/AuthenticationUser';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import ProtectedRoutes from './ProtectedRoutesUserPublic'
import ProtectedRoutesUserPublic from './ProtectedRoutesUserPublic'
import ProtectedRoutesAdminUser from './ProtectedRoutesAdminUser'

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
         {/* <Route element={<ProtectedRoutesUserPublic/>}>*/}
            <Route path='/utilisateur/dashboard/*' element={<Dashboard/>}></Route>
          {/*</Route>*/}
         {/* <Route element={<ProtectedRoutesAdminUser/>}>*/}
            <Route path='/admin/*' element={<MainLayoutContainer/>}></Route>
          {/*</Route>*/}
        </Routes>
    </RecoilRoot>
   </QueryClientProvider>
  )
}

export default App
