import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../apollo/queries/userQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditBasicInfo from './EditBasicInfo';
import { useState ,useEffect} from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function BasicInfo(props:any){
    const {loading,error,data} = useQuery(GET_USER,{
        variables: {userId:1}
    })
    console.log(data,"data");
    // Define state for each variable
    const [firstName, setFirstName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [grandfatherName, setGrandfatherName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [firstNameAr, setFirstNameAr] = useState('');
    const [fatherNameAr, setFatherNameAr] = useState('');
    const [grandfatherNameAr, setGrandfatherNameAr] = useState('');
    const [familyNameAr, setFamilyNameAr] = useState('');
    const [nationalId, setNationalId] = useState('');
    let [nationalIdExpiry, setNationalIdExpiry] = useState('');
    nationalIdExpiry = new Date(nationalIdExpiry).toLocaleDateString();
    const [maritalStatus, setMaritalStatus] = useState('');
    const [dependants, setDependants] = useState(0);

    // Set state when data is fetched
    useEffect(() => {
        if (data && data.user) {
        const user = data.user;
        setFirstName(user.firstName);
        setFatherName(user.fatherName);
        setGrandfatherName(user.grandfatherName);
        setFamilyName(user.familyName);
        setFirstNameAr(user.localizedName.firstName);
        setFatherNameAr(user.localizedName.fatherName);
        setGrandfatherNameAr(user.localizedName.grandfatherName);
        setFamilyNameAr(user.localizedName.familyName);
        setNationalId(user.nationalId.idNumber);
        setNationalIdExpiry(user.nationalId.expiryDate);
        setDependants(user.dependants);
        setMaritalStatus(user.maritalStatus.name);
}
    }, [data]);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
        <div className='bg-white p-5 rounded-lg mb-4'>
            <div className='flex justify-between mb-5'>
            <h1 className='text-2xl font-medium'>Basic Information</h1>
            <button className='bg-[#003fad] text-white py-2 px-8 rounded'  onClick={handleOpen}>Edit</button>
            </div>
            <div className='grid grid-cols-4 gap-6 '>
                <div>
                    <div className='mb-2'>
                        <p>National ID Number</p>
                        <p className='text-lg font-medium'>{nationalId}</p>
                    </div>
                    <div className='mb-2'>
                        <p>First Name</p>
                        <p className='text-lg font-medium'>{firstName}</p>
                    </div>
                    <div className='mb-2'>
                        <p>الأسم الأول</p>
                        <p className='text-lg font-medium'>{firstNameAr}</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Date of birth</p>
                        <p className='text-lg font-medium'>1/4/2000</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Passport No</p>
                        <p className='text-lg font-medium'>Ddsf894</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Matiral Status</p>
                        <p className='text-lg font-medium'>{maritalStatus}</p>
                    </div>     
                </div>
                <div>
                    <div className='mb-2'>
                        <p>National ID Expiring Date</p>
                        <p className='text-lg font-medium'>{nationalIdExpiry}</p>
                    </div>
                    <div className='mb-2'>
                        <p>Father Name</p>
                        <p className='text-lg font-medium'>{fatherName}</p>
                    </div>
                    <div className='mb-2'>
                        <p>أسم الأب</p>
                        <p className='text-lg font-medium'>{fatherNameAr}</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Gender</p>
                        <p className='text-lg font-medium'>Male</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Passport Issue Date</p>
                        <p className='text-lg font-medium'>6/4/1990</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Dependences</p>
                        <p className='text-lg font-medium'>0</p>
                    </div>     
                </div>
                <div>
                    <div className='mb-2'>
                        <p>Title</p>
                        <p className='text-lg font-medium'>MR</p>
                    </div>
                    <div className='mb-2'>
                        <p>Grand Fathar Name</p>
                        <p className='text-lg font-medium'>{grandfatherName}</p>
                    </div>
                    <div className='mb-2'>
                        <p>اسم الجد</p>
                        <p className='text-lg font-medium'>{grandfatherNameAr}</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Nationality</p>
                        <p className='text-lg font-medium'>1/4/2000</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Passport Expire Date</p>
                        <p className='text-lg font-medium'>Ddsf894</p>
                    </div> 
                </div>
                <div>
                    <div className='mb-2 pb-1 '>
                        <br/>
                        <br/>
                    </div>
                    <div className='mb-2'>
                        <p>Family Name</p>
                        <p className='text-lg font-medium'>{familyName}</p>
                    </div>
                    <div className='mb-2'>
                        <p>اللقب / اسم العائلة</p>
                        <p className='text-lg font-medium'>{familyNameAr}</p>
                    </div> 
                    <div className='mb-2'>
                        <p>Additional Nationality</p>
                        <p className='text-lg font-medium'>-</p>
                    </div>   
       
                </div>
        </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='flex justify-center items-center'>
        <EditBasicInfo/>
        </div>
      </Modal>
        </>
    )
}