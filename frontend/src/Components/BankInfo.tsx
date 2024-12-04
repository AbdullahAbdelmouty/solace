import React from "react"
export default function BankInfo(){
    return(
    <>
    <div className='bg-white p-5 rounded-lg mb-4'>
        <div className='flex justify-between mb-5'>
        <h1 className='text-2xl font-medium'>Bank Information</h1>
        <button className='bg-[#003fad] text-white py-2 px-8 rounded'>Edit</button>
        </div>
        <div className=''>
            <div className="grid grid-cols-3">
                <div className='mb-2'>
                    <p>Bank Name</p>
                    <p className='text-lg font-medium'>CIP</p>
                </div>
                <div className='mb-2'>
                    <p>First Name</p>
                    <p className='text-lg font-medium'>1234567890</p>
                </div>
         </div>
    </div>
    </div>
    </>
    )
}