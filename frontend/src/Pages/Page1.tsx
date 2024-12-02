import React from "react";
import AccountCard from "../Components/AccountCard";
import BasicInfo from "../Components/BasicInfo";
import {Routes, Route,Navigate} from "react-router-dom";

export default function Page1(){
    return(
        <>
        <div className="grid grid-cols-12 gap-5 ">
            <div className=" col-span-3 ">
            <AccountCard/>
            </div>
            <div className=" col-span-9">
            <BasicInfo/>
            <BasicInfo/>
            </div>
        </div>
        </>
    )
}