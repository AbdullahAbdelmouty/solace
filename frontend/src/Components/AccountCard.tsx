import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AppsIcon from '@mui/icons-material/Apps';
import DescriptionIcon from '@mui/icons-material/Description';
import PieChartIcon from '@mui/icons-material/PieChart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import person from '../Icons/person.svg'
import { Link } from "react-router-dom";
export default function AccountCard(){
    const [view, setView] = React.useState('list');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
      setView(nextView);
    };
    return(
        <>
        <div className="bg-white rounded-lg p-5">
            <div className="pb-5 border-b-2 mb-5">
                <div>
                <img src={person} className="App-logo" alt="logo" />
                <button className="relative bottom-8 left-24 bg-slate-300 p-1 rounded">
                    <CameraAltIcon/>
                </button>
                </div>
                <h2 className="text-2xl font-bold">Jone Smith</h2>
                <p>Senior Product Manager</p>
            </div>
      
            <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
                >
                <ToggleButton sx={{ border: 0 }}  value="list" aria-label="list">
                    <Link to=''>
                      Personal Information
                    </Link>
                </ToggleButton>
                <ToggleButton sx={{ border: 0 }}  value="two" aria-label="list">
                    <Link to=''>
                    Financial Information
                    </Link>
                </ToggleButton>
            </ToggleButtonGroup>
            </div>
        </>
    )
}