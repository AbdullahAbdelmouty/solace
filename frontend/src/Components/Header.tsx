import React from "react";
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import person from '../Icons/person.svg'
import { green } from '@mui/material/colors';

export default function Header(){
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }
    return(
        <>
        <div className='grid grid-cols-16 pb-7'>
        <div className='col-span-4'>
          <h1 className='text-3xl font-bold pb-3 text-[#151d48]'>Jone Smith Profile</h1>
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
        <div className='col-start-13 col-span-4 flex justify-end gap-5'>
          <button>
            <NotificationsNoneOutlinedIcon sx={{ color: green[900] }}/>
          </button>
          <button>
            <SettingsIcon sx={{ color: green[900] }}/>
          </button>
          <button>
            <MailOutlinedIcon sx={{ color: green[900] }} />
          </button>
          <button>
            <img src={person} className="App-logo w-10" alt="logo" />
          </button>
        </div>
        </div>
        </>
    )
}