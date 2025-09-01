import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import CopyButton from "./CopyBtn";

export default function Items({ d, onDelete }) {
  console.log(d.id);
  return (
    <div className="flex flex-col md:flex-row mb-6 border-2 border-gray-300 rounded-md p-5 shadow-lg hover:shadow-md justify-between items-start md:items-center">
      
      {/* Content */}
      <div className="space-y-3 w-full">
        {/* URL */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-3">
            <strong className="text-xl min-w-[100px]">Page URL:</strong>
            <p className="text-xl truncate max-w-xs">{d.url}</p>
          </div>
          <CopyButton text={d.url} />
        </div>

        {/* Username */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-3">
            <strong className="text-xl">Username:</strong>
            <p className="text-xl truncate max-w-xs">{d.username}</p>
          </div>
          <CopyButton text={d.username} />
        </div>

        {/* Password */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-3">
            <strong className="text-xl">Password:</strong>
            <p className="text-xl truncate max-w-xs">{d.password}</p>
          </div>
          <CopyButton text={d.password} />
        </div>
      </div>

      {/* Delete Button */}
      <div className="mt-3 md:mt-0 md:ml-5 self-end">
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 text-2xl"
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
}
