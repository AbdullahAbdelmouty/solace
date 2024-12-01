import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PieChartIcon from '@mui/icons-material/PieChart';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
function App() {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <div className="grid grid-cols-12">
      <div className='col-span-1 border-r-2 border-indigo-500'>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='flex flex-col items-center '>
        <div>
        <AppsIcon />
        </div>
        <div>
        <DescriptionIcon />
        </div>
        <div>
        <PeopleIcon />
        </div>
        <div>
        <Inventory2Icon />
        </div>
        <div>
        <PieChartIcon />
        </div>
        </div>
      </div>
      <div className='col-span-11 p-4 bg-gray-100	'>
        <div className='grid grid-cols-16 pb-7'>
        <div className='col-span-4'>
          <h1 className='text-3xl font-bold pb-3'>Jone Smith Profile</h1>
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Dashbard
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                HR Manager
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Employees
              </Link>
              <Link
                underline="hover"
                color="text.primary"
                href="/material-ui/react-breadcrumbs/"
                aria-current="page"
              >
                Jone Smith Profile
              </Link>
            </Breadcrumbs>
        </div>
        </div>
        <div className='col-start-13 col-span-4'>
          <h1>Dashboard</h1>
        </div>
        </div>
        <div className='grid grid-cols-12'>
          <div className='col-span-3'>
            <div className='bg-white p-1 rounded-lg'>
              <div>
              <img src={logo} className="App-logo" alt="logo" />  
              <h1 className='text-xl font-bold'>Dashboard</h1>
              <p>Dashboard</p>
              </div>
              <div>
                <button>
                  <p>Personal Information</p>
                </button>
                <button>
                  <p>Financial Information</p>
                </button>
              </div>
            </div>
          </div>
          <div className='col-span-9'>
            <img src={logo} className="App-logo" alt="logo" />  
            <h1 >Dashboard</h1>
            <p>Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
