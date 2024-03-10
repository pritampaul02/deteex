import React, { useState } from "react";

import { IoCall } from "react-icons/io5";
import { MdPhoto } from "react-icons/md";
import { PiBankFill } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { FiArrowRight } from "react-icons/fi";
import { IoMdMailOpen } from "react-icons/io";
import { RiHandbagFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { FaAddressCard, FaBuilding } from "react-icons/fa6";
import { FaCalendarAlt, FaPenFancy, FaUser } from "react-icons/fa";

import defaultDp from "../assets/default_Profile_Pic.png";

const AddCompany = () => {
    const [file, setFile] = useState(defaultDp);
    const [contactNumber, setContactNumber] = useState("");

    const handleContactChange = (e) => {
        const inputContact = e.target.value;
        if (inputContact.length <= 10 && !isNaN(inputContact)) {
            setContactNumber(inputContact);
        }
    };

    function fileHandle(event) {
        const image = event.target.files[0];

        if (image) {
            const readar = new FileReader();

            readar.addEventListener("load", function () {
                setFile(readar.result);
            });

            readar.readAsDataURL(image);
        }
    }

    return (
        <section id="addWorkers" className="w-full">
            <header className="w-full flex items-center sticky top-0 left-0 bg-purple-50 h-12 z-50">
                <div className="flex">
                    <h1 className="text-purple-800 font-semibold text-xl relative after:absolute after:h-[3px] after:w-[40%] after:rounded-full after:bg-purple-400 after:left-0 after:bottom-0">
                        Add Company
                    </h1>
                </div>
            </header>

            <form className="pt-5 pl-16">
                <div className="titleSection mt-4">
                    <h1 className="text-purple-800 font-semibold text-xl m-0">
                        Company Information
                    </h1>
                    <p className="text-sm text-slate-500">
                        Fillup the company informations of the Workers
                    </p>
                </div>
                {/* <div className="grid grid-cols-[1.5fr,3fr] gap-x-10 gap-y-4 items-center content-center text-purple-800 pb-3 pt-2  px-2"></div> */}
                <div className="container w-[610px] border border-purple-200 px-4 py-3 rounded-md bg-fuchsia-100 mt-1">
                    <div className="grid grid-cols-[1.5fr,3fr] gap-x-10 gap-y-4 items-center content-center text-purple-800 pb-3 pt-2  px-2 w-full">
                        <div className="flex items-center gap-1 font-medium">
                            <FaBuilding /> Company Name{" "}
                        </div>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                        {/* email  */}
                        <div className="flex items-center gap-1 font-medium">
                            <IoMdMailOpen /> Email Address{" "}
                        </div>
                        <input
                            type="email"
                            placeholder="Email Id"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />

                        <div className="flex items-center gap-1 font-medium">
                            <MdPhoto />
                            Company Logo
                        </div>
                        <div className="flex flex-row gap-2 items-start">
                            <img
                                src={file}
                                alt=""
                                id="image"
                                className="h-24 w-24 aspect-square rounded-full"
                            />
                            <input
                                id="imageUpload"
                                type="file"
                                accept="image/*"
                                className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none hidden"
                                onChange={fileHandle}
                            />
                            <div className="text-left py-2">
                                <label
                                    className="font-medium text-fuchsia-700 relative after:absolute after:h-[2px] after:w-full after:bg-fuchsia-700 after:bottom-0 after:left-0"
                                    htmlFor="imageUpload"
                                >
                                    Click to Upload
                                </label>
                                <span>
                                    &nbsp; svg,png,jpg or gif (max 800px x
                                    800px)
                                </span>
                            </div>
                        </div>

                        {/* address  */}
                        <div className="flex items-center gap-1 font-medium">
                            <FaPenFancy /> Address
                        </div>
                        <textarea
                            placeholder="Address"
                            className="h-24 rounded-md border-purple-300 border p-2 outline-none focus:outline-none"
                        />
                        <div className="flex items-center gap-1 font-medium">
                            <IoCall /> Phone
                        </div>
                        <input
                            type="number"
                            value={contactNumber}
                            onChange={handleContactChange}
                            placeholder="Contact Number"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />
                        {/* email  */}
                        <div className="flex items-center gap-1 font-medium">
                            <RiHandbagFill /> Type of Company
                        </div>
                        <input
                            type="text"
                            placeholder="Company Type"
                            className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                        />

                        <div className="flex items-center gap-1 font-medium self-start pt-2">
                            <PiBankFill /> Bank Details
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <input
                                type="number"
                                name=""
                                id=""
                                placeholder="Account Number [0102561242562358]"
                                className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="IFSC Code"
                                    className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none w-1/2"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="MICR Code"
                                    className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none w-1/2"
                                />
                            </div>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Brunch Code"
                                className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                            />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Brunch Name"
                                className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                            />
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Bank Name"
                                className="h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex my-3 mb-7  items-center justify-end container w-[610px]">
                    <button className="flex flex-row items-center justify-center bg-gradient-to-tl from-indigo-600 hover:bg-indigo-700 to-fuchsia-600 hover:to-fuchsia-700 py-2 px-4 rounded-md text-white gap-2 font-medium transition-all">
                        {" "}
                        Add Comapny <FiArrowRight />
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddCompany;