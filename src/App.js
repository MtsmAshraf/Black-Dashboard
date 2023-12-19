import React from 'react';
import './App.css';
import { RouterProvider ,Route ,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home';
import RootLayout from './layouts/RootLayout';
import ContentLayout from './layouts/ContentLayout';
import { Fragment } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Icons from './components/icons/Icons';
import Notifications from './components/notifications/Notifications';
import MapC from './components/map/MapC';
import UserProfile from './components/user-profile/UserProfile';
import TableList from './components/table-list/TableList';
import Typography from './components/typography/Typography';

// #################################################
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faReact , faXTwitter , faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons';
library.add(fas, faReact ,faXTwitter , faGoogle , faFacebook ,  faImage)

// #################################################


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route path='/' element={<ContentLayout />}>
          <Route path='/' element={<Dashboard />}/>
          <Route path='/icons' element={<Icons />}/>
          <Route path='/map' element={<MapC/>}/>
          <Route path='/notifications' element={<Notifications />}/>
          <Route path='/user-profile' element={<UserProfile />}/>
          <Route path='/table-list' element={<TableList />}/>
          <Route path='/typography' element={<Typography />}/>
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
