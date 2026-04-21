import React from "react";
import { motion } from "framer-motion"; // مكتبة الأنيميشن
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
      
      {/* Background Image - انيميشن خفيف للتكبير */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: "url('bg.png')" }}
      ></motion.div>

      {/* Content */}
      <div className="relative text-center w-full px-4 md:px-6">
        
        {/* Title - ظهور من الأعلى */}
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white font-extrabold text-[28px] sm:text-[40px] md:text-[60px] lg:text-[72px] leading-[1.2]"
        >
          بوابتك للفخامة <br /> في قلب الرياض
        </motion.h1>

        {/* Search Bar - ظهور من الأسفل */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 md:mt-10 flex justify-center"
        >
          <div className="flex flex-col md:flex-row items-stretch bg-[#eef1f5] rounded-2xl shadow-xl overflow-hidden w-full max-w-[1000px]">

            {/* Location */}
            <div className="flex-1 px-5 md:px-8 py-4 md:py-6 border-b md:border-b-0 md:border-l text-right hover:bg-white transition-colors duration-300">
              <div className="flex items-center justify-end gap-2 text-yellow-900 text-xs md:text-sm mb-1">
                <span>الموقع</span>
                <MapPin size={18} className="text-[#1f3b73]" />
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">
                حي حطين، النرجس...
              </p>
            </div>

            {/* Property Type */}
            <div className="flex-1 px-5 md:px-8 py-4 md:py-6 border-b md:border-b-0 md:border-l text-right hover:bg-white transition-colors duration-300">
              <div className="flex items-center justify-end gap-2 text-yellow-900 text-xs md:text-sm mb-1">
                <span>نوع العقار</span>
                <Building2 size={18} className="text-[#1f3b73]" />
              </div>
              <p className="text-gray-400 font-medium text-sm md:text-base">
                فلل فاخرة
              </p>
            </div>

            {/* Price */}
            <div className="flex-1 px-5 md:px-8 py-4 md:py-6 border-b md:border-b-0 md:border-l text-right hover:bg-white transition-colors duration-300">
              <div className="flex items-center justify-end gap-2 text-yellow-900 text-xs md:text-sm mb-1">
                <span>السعر التقريبي</span>
                <Wallet size={20} className="text-[#1f3b73]" />
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                2,000,000 ر.س
              </p>
            </div>

            {/* Button - تأثير الضغط */}
            <motion.button 
              whileHover={{ backgroundColor: "#163a8a" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0d2c6c] text-white px-6 md:px-14 py-2 md:py-8 text-sm md:text-lg font-bold md:w-auto transition-all"
            >
              بحث متقدم
            </motion.button>

          </div>
        </motion.div>
      </div>

      {/* WhatsApp Section */}
      <div className="fixed left-3 md:left-10 bottom-4 md:bottom-10 z-50 group">
        
        {/* Floating WhatsApp Button with Pulse */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="bg-green-500 w-11 h-11 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg cursor-pointer z-50 relative"
        >
          <FaWhatsapp size={24} className="text-white" />
        </motion.div>

        {/* Action Icons - تظهر عند الـ Hover */}
        <div className="absolute bottom-14 md:bottom-16 left-0 flex flex-col items-center gap-2 md:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          {[Phone, Mail, User, Share2, MessageSquare].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, backgroundColor: "#f0f0f0" }}
              className="bg-white text-[#1f3b73] p-2 md:p-3 rounded-full shadow-lg cursor-pointer transform translate-y-6 group-hover:translate-y-0 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Icon size={16} />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}