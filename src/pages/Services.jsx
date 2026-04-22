import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [dark, setDark] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDi69Grc9exRHWMlSbc9gAhFx2KlNecCLQ0SYquVt0H121GA64-YMvHW9AVOSn7QfYF7H7j2XSAUbgnI0oc3rVNM5zR7-hI_iuflHiyaKyq1ILeYtfvhVBOYcnC4he919BOZMe-NlqrEuuHPghfM3TVfcz6Pm8a9UoIXxd4oc_fuZ6grC-Gghlo310V5rZzlG-tQTgVIkB4DEx-3o6PDtyUkGbbU0xpKyftt6AxR0pAji0Y-OdHaEPm5We-O2061hAWA5U_m5nYiCk",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAfgja7-fihHlwi9H9nmpYwMHdy6aEDGQo__qA5gJUXkIiJ8E1v4PlwagSTQoaVI2xLtFNPOHxooVgRHLXJIAPWdoYn_mVA2vbv_4jBSjf_2e8i_d9WSPC4qGw7GmWeqGq4s2m96dLvFCnK4EX5E-EPCxv2Ijr2qZzxuybd5iL4jXXd77tMPsL7ssoSEtn_L2EJkfLFQ3Vp3SymhdyjfHk_XTzF--_Zb2m8eBcKeLSfbc3iO9105DJCGLDjhgKcidfSeXiZucuMuPg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDi69Grc9exRHWMlSbc9gAhFx2KlNecCLQ0SYquVt0H121GA64-YMvHW9AVOSn7QfYF7H7j2XSAUbgnI0oc3rVNM5zR7-hI_iuflHiyaKyq1ILeYtfvhVBOYcnC4he919BOZMe-NlqrEuuHPghfM3TVfcz6Pm8a9UoIXxd4oc_fuZ6grC-Gghlo310V5rZzlG-tQTgVIkB4DEx-3o6PDtyUkGbbU0xpKyftt6AxR0pAji0Y-OdHaEPm5We-O2061hAWA5U_m5nYiCk",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAc8gW4vL4qzbAhjmBPhrrCTakuzI3wrT0U0b6tdUdH-nn_bqIQhEOS_ipPh6tLpip31GUkFeRC9tD7Yr9KHMeP_UM6Vr8dMVtm_dCv_oP4zoAqJuo11N2O-Cq3jfTPzeaN1yS7xUKVY8NDhvfKZ6FUiMmYPtwYpD7PLlYvHskNb3w86Gkhx2OFDJ8c2kiOw2_GVB5saDRTt40uioXDwpmFaePqSzzeJc-6_QXu7yylrk7DdWS57PixsBk_Di1AzRGVNzlLIPUxUQ0",
    "bg.png",
 
  ];

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // ✅ Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-10">
      <section
        className={`-mt-10 py-20 md:py-24 overflow-hidden ${
          dark ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${
              dark ? "text-white" : "text-blue-900"
            }`}
          >
            تجربة المشاهدة الثلاثية الأبعاد
          </h2>

          <p
            className={`text-sm md:text-base lg:text-lg mb-10 ${
              dark ? "text-gray-300" : "text-gray-500"
            }`}
          >
            نقدم لك تقنية العرض المتطورة لاستكشاف تفاصيل منزلك المستقبلي قبل بنائه.
            تحكم في الإضاءة، وزع الأثاث، واختبر المساحات بدقة متناهية.
          </p>

          {/* SLIDER */}
          <div className="relative">

            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-xl overflow-hidden">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-[200px] md:h-[400px] object-cover rounded-xl"
                />
              </AnimatePresence>

            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
            >
              ›
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setCurrent(index)}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                  current === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>

        </div>
      </section>









{/* البتاع التاني يعممممممممممممم */}






    <section
      className={`-mt-10 py-20 md:py-24 overflow-hidden ${
        dark ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl relative z-10">

              <img
                src="bg.png"
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
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${
                        dark ? "left-1" : "right-1"
                      }`}
                    ></div>
                  </div>

                  <span className="material-symbols-outlined text-blue-300 text-lg">
                    dark_mode
                  </span>
                </div>

                <p
                  className={`text-[11px] md:text-xs opacity-80 text-right ${
                    dark ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  معاينة الوضع الليلي
                </p>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 md:w-64 h-40 md:h-64 bg-secondary-fixed/20 rounded-full blur-3xl"></div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 text-right">
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 ${
                dark ? "text-white" : "text-blue-900"
              }`}
            >
              تجربة المشاهدة الثلاثية الأبعاد
            </h2>

            <p
              className={`text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 ${
                dark ? "text-gray-300" : "text-gray-500"
              }`}
            >
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
                <span
                  className={`font-bold text-sm md:text-base lg:text-lg ${
                    dark ? "text-white" : "text-blue-900"
                  }`}
                >
                  دوران كامل 360 درجة
                </span>
              </div>

              <div className="flex flex-row-reverse items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-amber-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-900 text-sm md:text-base">
                    photo_camera
                  </span>
                </div>
                <span
                  className={`font-bold text-sm md:text-base lg:text-lg ${
                    dark ? "text-white" : "text-blue-900"
                  }`}
                >
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