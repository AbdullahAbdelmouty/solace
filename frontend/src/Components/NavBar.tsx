import React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import PieChartIcon from '@mui/icons-material/PieChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import logo from '../logo.svg'
import icon1 from '../Icons/icon1.svg'
import icon2 from '../Icons/icon2.svg'
import icon3 from '../Icons/icon3.svg'
import icon4 from '../Icons/icon4.svg'
import icon5 from '../Icons/icon5.svg'
import { Link } from 'react-router-dom';
export default function NavBar(){
    const [view, setView] = React.useState('list');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
      setView(nextView);
    };
  
    return(
        <>
        <div className='col-span-1 border-r-2 border-[#003fad] pt-6'>
        <div className='flex justify-center mb-3 '>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='flex flex-col items-center '>
            <ToggleButtonGroup
                
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
                >
                <ToggleButton sx={{ border: 0 }}  value="list" aria-label="list">
                    <Link to=''>
                      <AppsIcon />
                    </Link>
                </ToggleButton>
                <ToggleButton sx={{ border: 0 }}  value="two" aria-label="module">
                    <Link to="/page2">
                     <PieChartIcon />
                    </Link>
                </ToggleButton>
                <ToggleButton sx={{ border: 0 }}  value="three" aria-label="quilt">
                    <Link to="/page3">
                     <DescriptionIcon />
                    </Link>
                </ToggleButton>
                <ToggleButton sx={{ border: 0 }}  value="four" aria-label="quilt">
                    <Link to="/page4">
                     <PeopleAltIcon />
                    </Link>
                </ToggleButton>
                <ToggleButton sx={{ border: 0 }}  value="five" aria-label="quilt">
                    <Link to="/page5">
                     <InventoryIcon />
                    </Link>
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
      </div>
        </>
    )
}