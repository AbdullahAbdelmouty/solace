import React from "react";
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

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
        <div className='col-start-13 col-span-4'>
          <h1>Dashboard</h1>
        </div>
        </div>
        </>
    )
}