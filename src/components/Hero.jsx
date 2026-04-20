import React from "react";
import {
  Phone,
  Mail,
  Share2,
  User,
  MessageSquare,
  MapPin,
  Building2,
  Wallet,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] bg-[#1f3b73] overflow-hidden flex items-center justify-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-center bg-cover opacity-[0.08]"
        style={{ backgroundImage: "url('bg.png')" }}
      ></div>

      {/* Content */}
      <div className="relative text-center w-full px-4 md:px-6">

        {/* Title */}
        <h1 className="text-white font-extrabold text-[28px] sm:text-[40px] md:text-[60px] lg:text-[72px] leading-[1.2]">
          بوابتك للفخامة <br /> في قلب الرياض
        </h1>

        {/* Search Bar */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="flex flex-col md:flex-row items-stretch bg-[#eef1f5] rounded-2xl shadow-xl overflow-hidden w-full max-w-[1000px]">

            {/* Location */}
            <div className="flex-1 px-5 md:px-8 py-4 md:py-6 border-b md:border-b-0 md:border-l text-right">
              <div className="flex items-center justify-end gap-2 text-yellow-900 text-xs md:text-sm mb-1">
                <span>الموقع</span>
                <MapPin size={18} className="text-[#1f3b73]" />
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">
                حي حطين، النرجس...
              </p>
            </div>

            {/* Property Type */}
            <div className="flex-1 px-5 md:px-8 py-4 md:py-6 border-b md:border-b-0 md:border-l text-right">
              <div className="flex items-center justify-end gap-2 text-yellow-900 text-xs md:text-sm mb-1">
                <span>نوع العقار</span>
                <Building2 size={18} className="text-[#1f3b73]" />
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">
                فلل فاخرة
              </p>
            </div>

            {/* Price */}
            <div className="flex-1 px-5 md:px-8 py-4 md:py-6 border-b md:border-b-0 md:border-l text-right">
              <div className="flex items-center justify-end gap-2 text-yellow-900 text-xs md:text-sm mb-1">
                <span>السعر التقريبي</span>
                <Wallet size={20} className="text-[#1f3b73]" />
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                2,000,000 ر.س
              </p>
            </div>

            {/* Button */}
            <button className="bg-[#0d2c6c] text-white px-6 md:px-14 py-2 md:py-8 text-sm md:text-lg font-bold  md:w-auto hover- ">
              بحث متقدم
            </button>

          </div>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="fixed left-3 md:left-10 bottom-4 md:bottom-30 z-50 group">

        <div className="bg-green-500 w-11 h-11 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
          <FaWhatsapp size={24} className="text-white" />
        </div>

        <div className="absolute bottom-14 md:bottom-16 left-0 flex flex-col items-center gap-2 md:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">

          {[Phone, Mail, User, Share2, MessageSquare].map((Icon, i) => (
            <div
              key={i}
              className="bg-white text-[#1f3b73] p-2 md:p-3 rounded-full shadow-lg translate-y-6 group-hover:translate-y-0 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Icon size={16} />
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}