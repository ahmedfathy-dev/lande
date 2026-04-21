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
  Link,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function Contact() {
  return (
    <>
      {/* Footer */}
      <div className="pt-10">
      <footer className="bg-blue-900 text-surface text-sm w-full border-[#1E3A8A]">

        <div className="flex flex-col md:flex-row-reverse justify-between items-start  gap-10 md:gap-12 px-6 md:px-12 lg:px-30 py-12 md:py-16 w-full max-w-7xl mx-auto">

          {/* Left Section (Company Info) */}
          <div className="flex flex-col gap-4 max-w-sm text-right md:order-1 w-full md:w-auto">

            <span className="text-2xl md:text-3xl font-bold text-amber-200">
              TSD Real Estate
            </span>

            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              الشركة الرائدة في مجال التطوير والوساطة العقارية في مدينة الرياض. نقدم حلولاً سكنية واستثمارية تتجاوز التوقعات.
            </p>

            <div className="flex gap-4 justify-end md:justify-start">
              {/* empty (as in your design) */}
            </div>

          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 w-full md:w-auto text-amber-200 text-right md:order-2  ">

            <div className="flex flex-col gap-4">
              <h5 className="text-secondary-fixed font-bold mb-2">
                عن الصقور
              </h5>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                عن الشركة
              </a>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                فريق العمل
              </a>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                المقالات
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="text-secondary-fixed font-bold mb-2">
                المساعدة
              </h5>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                سياسة الخصوصية
              </a>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                الشروط والأحكام
              </a>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                خريطة الموقع
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="text-secondary-fixed font-bold mb-2">
                الخدمات
              </h5>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                إدارة الأملاك
              </a>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                التسويق العقاري
              </a>
              <a className="text-gray-300 hover:text-secondary-fixed transition-colors" href="#">
                التقييم والتثمين
              </a>
            </div>

          </div>

        </div>










   {/* WhatsApp */}
      <div className="fixed left-3 md:left-10 bottom-4 md:bottom-30 z-50 group">

        <div to="01018874121" className="bg-green-500 w-11 h-11 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg cursor-pointer">
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











      </footer>
        
      </div>
    </>
  );
}