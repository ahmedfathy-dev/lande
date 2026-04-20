import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#e0e9f5] py-4 px-6 md:px-10 flex items-center justify-between shadow-sm">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="text-yellow-500 text-3xl">⌘</div>
        <h1 className="font-bold text-2xl text-[#1f3b73]">
          TSD Real Estate
        </h1>
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-10 text-[#1f3b73] font-medium ">
        <a href="#" className=" hover:text-amber-900  px-2 py-1 rounded">
          اتصل بنا
        </a>
        <a href="#" className="  hover:text-amber-900">عن الشركة</a>
        <a href="#" className="  hover:text-amber-900">الخدمات</a>
        <a
          href="#"
          className="border-b-2 border-yellow-900 pb-1 text-yellow-900"
        >
          المشاريع
        </a>
      </div>

      {/* Button */}
      <button className="bg-[#1f3b73] text-white px-4 md:px-6 py-2 rounded-lg">
        طلب خدمه
      </button>
    </div>
  );
}