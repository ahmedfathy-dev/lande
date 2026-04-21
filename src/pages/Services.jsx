import { div } from "framer-motion/client";
import { useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
     
<div className="pt-10">

    <section
      className={`-mt-10 py-20 md:py-24 overflow-hidden  ${
        dark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl relative z-10">

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6vgmlm8ByvIdIdSJ8GOp9L6f6WwuggjLf8fHyEOipCFzD3bf7QvCOsoJaWQu73Y9RI21D6wUGVkLF7X4iF_-HdlrZk_z8bimvSzll9uh0DkPyQAxXBk_TPvWYHC6ZCwPo0a5ahZbMP5KHkcdjBu4ixKgaYAMHbJ0ZlMqv9JsVgnkH7cgFriY7HxgaXZpPdHYgEzDFXfMfhYvTJT_XaZA2fFrJIDhawHGMzZXOW8b8LmQJzwK1H3z7OXCriSszu6q6hjAC4EPq1Uc"
                alt="3D Floor Plan"
                className="w-full h-auto rounded-xl shadow-md grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Toggle */}
              <div className="absolute -bottom-2 left-50 bg-black/70 backdrop-blur-md p-4 md:p-5 rounded-2xl text-white shadow-xl border border-white/10">
                
                <div className="flex items-center gap-3 mb-2 ">

                  <span className="material-symbols-outlined text-yellow-300 text-lg ">
                    light_mode
                  </span>

                  <div
                    onClick={() => setDark(!dark)}
                    className="w-14 h-7 bg-white/20 rounded-full relative cursor-pointer transition-all duration-300 "
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 **: ${
                        dark ? "left-1" : "right-1"
                      }`}
                    ></div>
                  </div>

                  <span className="material-symbols-outlined text-blue-300 text-lg">
                    dark_mode
                  </span>
                </div>

                <p className="text-[11px] md:text-xs opacity-80 text-right text-gray-300">
                  معاينة الوضع الليلي
                </p>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 md:w-64 h-40 md:h-64 bg-secondary-fixed/20 rounded-full blur-3xl"></div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 text-right">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 md:mb-6">
              تجربة المشاهدة الثلاثية الأبعاد
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed mb-6 md:mb-8">
              نقدم لك تقنية العرض المتطورة لاستكشاف تفاصيل منزلك المستقبلي قبل بنائه.
              تحكم في الإضاءة، وزع الأثاث، واختبر المساحات بدقة متناهية.
            </p>

            <div className="space-y-3 md:space-y-4">

              <div className="flex flex-row-reverse items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-amber-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-900 text-sm md:text-base">
                    3d_rotation
                  </span>
                </div>
                <span className="text-blue-900 font-bold text-sm md:text-base lg:text-lg">
                  دوران كامل 360 درجة
                </span>
              </div>

              <div className="flex flex-row-reverse items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-amber-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-900 text-sm md:text-base">
                    photo_camera
                  </span>
                </div>
                <span className="text-blue-900 font-bold text-sm md:text-base lg:text-lg">
                  لقطات واقعية عالية الدقة
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl relative z-10">

              <img
                src="bg.png"
                alt="3D Floor Plan"
                className="w-full h-auto rounded-xl shadow-md grayscale hover:grayscale-0 transition-all duration-500"
              />

          
            </div>

            <div className="absolute -top-10 -right-10 w-40 md:w-64 h-40 md:h-64 bg-secondary-fixed/20 rounded-full blur-3xl"></div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 text-right">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 md:mb-6">
مناظر خلابه            </h2>

            <p className="text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed mb-6 md:mb-8">
تدير املاكك او املاك الغير .. ايجارات و تحصيل و عقود منصة ايجار، و اتفاقيات ادارة الاملاك و التحصيل و السداد للمالك. تابع كل شي من مكان واحد، ما يفوتك شي!   </p>

            <div className="space-y-3 md:space-y-4">

           

              <div className="flex flex-row-reverse items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-amber-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-900 text-sm md:text-base">
                    photo_camera
                  </span>
                </div>
                <span className="text-blue-900 font-bold text-sm md:text-base lg:text-lg">
                لقطات واقعية عالية الدقة
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

</div>

  );
}