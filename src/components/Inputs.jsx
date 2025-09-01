import React, { useState } from "react"
import { IoEyeOutline,IoEyeOffOutline } from "react-icons/io5";


function Inputs({ urlRef, usernameRef, passwordRef, handleData }) {
  const [showPassword, setShowPassword] = useState(false);
  const handlePass = () => {
       setShowPassword(!showPassword);
  };

  return (
    <div className="container bg-red-300 w-full grid items-center px-4">
      <h1 className="text-2xl pt-4 w-full underline">Manage Your Pass</h1>
      <div className="text-white flex flex-col p-4 pt-10">
        <input
          className="rounded-full bg-gray-800 text-xl outline-0 p-2 pl-3.5"
          type="text"
          placeholder="Enter Page Url"
          ref={urlRef}
        />
        <div className="flex pt-5 gap-6 flex-wrap">
          <input
            type="text"
            className="rounded-full bg-gray-800 text-xl outline-0 p-2 pl-3.5 min-w-77.5"
            style={{ width: "68%" }}
            placeholder="Enter Username"
            ref={usernameRef}
          />
          <div className="flex items-center relative">
          <input
            type={showPassword ? "text" : "password"}
            className="rounded-full bg-gray-800 text-xl outline-0 p-2 pl-3.5 min-w-77.5"
            style={{ width: "30%" }}
            ref={passwordRef}
            placeholder="Enter Password"
          />
          <button className="absolute right-2 text-2xl" onClick={handlePass} >{showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="cursor-pointer bg-fuchsia-700 text-amber-50 w-max p-2 pl-4 pr-4 rounded-xl font-bold mt-2.5 mb-6 hover:opacity-80 flex justify-center text-xl gap-1" onClick={handleData}>
          <lord-icon
            src="https://cdn.lordicon.com/gzqofmcx.json"
            trigger="hover"
            style={{width:"30px",height:"30px"}}
          ></lord-icon>
          ADD
        </button>
      </div>
    </div>
  );
}

export default Inputs;
