import { FaHandHoldingMedical } from "react-icons/fa";
import React, { useState } from 'react';
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { FaReadme } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";
import { GiNurseFemale } from "react-icons/gi";
import { GiStethoscope } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();
    const Menus = [
      { title: "Dashboard", src: <AiFillDashboard size={30} />, path: "//dashboard" },
      { title: "Doctors", src: <GiStethoscope size={30} />, path: "/admin/doctors" },
      { title: "Nurses", src: <GiNurseFemale size={30} />, path: "/admin/nurses" },
      { title: "Wards", src: <RiHospitalFill size={30} />, path: "/admin/wards" },
      { title: "Admission clerks", src: <FaReadme size={30} />, path: "/admin/clerks" },
      { title: "Add to staff", src: <AiFillFileAdd size={30} />, path: "/admin/addStaff" },
    ];
  
    const navigateDashBoard = (e, path) => {
  
      e.preventDefault();
      navigate(path);
    }
  //bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-gray-700 via-gray-900 to-black
    const open = !useMediaQuery("(min-width:600px)");
    return (
  
      <>
        <div
          className={` ${open ? "w-72" : "w-20 "
            }  h-screen p-5  
            pt-8 duration-300 overflow-y-auto bg-gray ` }
        >
          <div className="flex gap-x-7 items-center">
            <FaHandHoldingMedical size={55} color="#e0e7ff" />
            <h1 className={`text-white origin-left font-large font-serif italic text-xl duration-200  ${!open && "scale-0"}`}
            >
              BIDCIRCLE
  
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((Menu, index) => (
              <li key={index} onClick={(e, path) => navigateDashBoard(e, Menu.path)} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"}  `}>
                <span>{Menu.src}</span>
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  <span>{Menu.title}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
  
      </>
    );
}

export default SideBar