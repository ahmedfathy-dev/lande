import React from "react";
import { motion } from "framer-motion";

export default function Card() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-row-reverse justify-between items-end mb-16">
          <div className="text-right">
            <span className="text-amber-900 font-bold tracking-[0.2em] block mb-2">
              عقارات مختارة
            </span>
            <h2 className="text-4xl font-bold text-blue-900 ">
              أحدث المشاريع الحصرية
            </h2>
          </div>

          <a className="hidden md:flex items-center gap-2 text-primary font-bold " href="#">
            عرض الكل
            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-2">
              arrow_back
            </span>
          </a>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >

          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="absolute top-4 right-4 bg-secondary-fixed px-5 py-2 rounded-full text-lg bg-amber-100 shadow-md">
                  {card.price}
                </div>
              </div>

              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {card.title}
                </h3>

                <div className="flex flex-row-reverse items-center gap-6 text-gray-500 border-t border-surface-container-high pt-4">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-xm">
                      bed
                    </span>
                    <span className="text-sm">{card.beds}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      bathtub
                    </span>
                    <span className="text-sm">{card.baths}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      square_foot
                    </span>
                    <span className="text-sm">{card.area}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}


/* Data */
const cards = [
  {
    title: "فيلا الصقور الملكية - حطين",
    price: "3,450,000 ر.س",
    beds: "5 غرف",
    baths: "4 حمام",
    area: "450 م²",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6vgmlm8ByvIdIdSJ8GOp9L6f6WwuggjLf8fHyEOipCFzD3bf7QvCOsoJaWQu73Y9RI21D6wUGVkLF7X4iF_-HdlrZk_z8bimvSzll9uh0DkPyQAxXBk_TPvWYHC6ZCwPo0a5ahZbMP5KHkcdjBu4ixKgaYAMHbJ0ZlMqv9JsVgnkH7cgFriY7HxgaXZpPdHYgEzDFXfMfhYvTJT_XaZA2fFrJIDhawHGMzZXOW8b8LmQJzwK1H3z7OXCriSszu6q6hjAC4EPq1Uc",
  },
  {
    title: "شقق ريزيدنس - النرجس",
    price: "1,200,000 ر.س",
    beds: "3 غرف",
    baths: "2 حمام",
    area: "180 م²",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfgja7-fihHlwi9H9nmpYwMHdy6aEDGQo__qA5gJUXkIiJ8E1v4PlwagSTQoaVI2xLtFNPOHxooVgRHLXJIAPWdoYn_mVA2vbv_4jBSjf_2e8i_d9WSPC4qGw7GmWeqGq4s2m96dLvFCnK4EX5E-EPCxv2Ijr2qZzxuybd5iL4jXXd77tMPsL7ssoSEtn_L2EJkfLFQ3Vp3SymhdyjfHk_XTzF--_Zb2m8eBcKeLSfbc3iO9105DJCGLDjhgKcidfSeXiZucuMuPg",
  },
  {
    title: "قصر واحة النخيل - الملقا",
    price: "7,800,000 ر.س",
    beds: "7 غرف",
    baths: "6 حمام",
    area: "1200 م²",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi69Grc9exRHWMlSbc9gAhFx2KlNecCLQ0SYquVt0H121GA64-YMvHW9AVOSn7QfYF7H7j2XSAUbgnI0oc3rVNM5zR7-hI_iuflHiyaKyq1ILeYtfvhVBOYcnC4he919BOZMe-NlqrEuuHPghfM3TVfcz6Pm8a9UoIXxd4oc_fuZ6grC-Gghlo310V5rZzlG-tQTgVIkB4DEx-3o6PDtyUkGbbU0xpKyftt6AxR0pAji0Y-OdHaEPm5We-O2061hAWA5U_m5nYiCk",
  },
  {
    title: "فيلا المودرن - الياسمين",
    price: "2,900,000 ر.س",
    beds: "4 غرف",
    baths: "3 حمام",
    area: "380 م²",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc8gW4vL4qzbAhjmBPhrrCTakuzI3wrT0U0b6tdUdH-nn_bqIQhEOS_ipPh6tLpip31GUkFeRC9tD7Yr9KHMeP_UM6Vr8dMVtm_dCv_oP4zoAqJuo11N2O-Cq3jfTPzeaN1yS7xUKVY8NDhvfKZ6FUiMmYPtwYpD7PLlYvHskNb3w86Gkhx2OFDJ8c2kiOw2_GVB5saDRTt40uioXDwpmFaePqSzzeJc-6_QXu7yylrk7DdWS57PixsBk_Di1AzRGVNzlLIPUxUQ0",
  },
  {
    title: "برج المجد السكني - العليا",
    price: "1,850,000 ر.س",
    beds: "2 غرف",
    baths: "2 حمام",
    area: "150 م²",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCQvM-69ZGHa3PHcZ6Vu3YHHwseITyYVFFkNWvCfpzgbP7fcqxsAj-k9wrMlk_ZTQfXPJ7bseZnZt9ECgeFgyuSC294bGCA9e4aPRb0zbT_aYyxFNW0KNH8qd9MKeUF0WiYe57XATqUSUsl6nOz50L70vDdsJZmRhGbx_HFCdh5U0GIfrr3gCwsFSiOVMyZGjyE0Kf7DNpR-RfoBPlg_eT-RZzO22gf3azss0t54pF9e6Vk7GsJxmX6QS8JH2_5HYas8Lk71TDSfg",
  },
  {
    title: "فيلا الأندلسية - الصحافة",
    price: "4,100,000 ر.س",
    beds: "6 غرف",
    baths: "5 حمام",
    area: "520 م²",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZkUA6EwtXWLFS5pzz_ty3omacOoixDhMmxt7wuba-SZ6W-ZEVTzOR4CjmBfbObrc2Pgm09SOMT3idvAZFdgY4ILTgDv3gDH63QS7qPmSrpOrkvwRlwdDShCXsXnQ5KSZWMyHtt5Z-2U9kCZeRaN4gU3PRHeb2aC82BNewnuUW4OPJqpCQifyrmmuslwridCO9nwqEhqzy7hzOebfyQy88gFcypyKVrGcRuaSDnSKHT3jbLjA9GkMkJGXr5hNKb5Pbvs_3yxl_0oo",
  },
];