import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-blue-900 text-surface text-sm w-full border-[#1E3A8A]">

        <div className="flex flex-col md:flex-row-reverse justify-between items-start gap-10 md:gap-12 px-6 md:px-12 lg:px-30 py-12 md:py-16 w-full max-w-7xl mx-auto">

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

      </footer>
    </>
  );
}