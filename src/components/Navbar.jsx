import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#e0e9f5] py-4 px-6 md:px-10 flex items-center justify-between shadow-sm">
      
      {/* Logo */}
      <div  className="flex items-center gap-3">
        <div className="text-yellow-500 text-3xl">⌘</div>
        <Link to="/" className="font-bold text-2xl text-[#1f3b73]">
          TSD Real Estate
        </Link>

      </div>



{/* Links */}
<div className="hidden md:flex gap-10 text-[#1f3b73] font-medium">
  <Link to="/contact" className="hover:text-amber-900 px-2 py-1 rounded">
    اتصل بنا
  </Link>

  <Link to="/about" className="hover:text-amber-900">
    عن الشركة
  </Link>

  <Link to="/services" className="hover:text-amber-900">
    الخدمات
  </Link>

  <Link
    to="/projects"
    className="  hover:text-amber-900"
  >
    المشاريع
  </Link>
  <Link
    to="/"
    className="  hover:text-amber-900"
  >
   الرئيسيه
  </Link>
</div>


<button
  onClick={() => {
    const message = encodeURIComponent("السلام عليكم عايز استفسر عن خدمة");
    window.open(`https://wa.me/201068389295?text=${message}`, "_blank");
  }}
  className="bg-[#1f3b73] text-white px-4 md:px-6 py-2 rounded-lg"
>
  طلب خدمه
</button>
    </div>
  );
}