import React from "react";

export default function Pernts() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">

          {/* Text */}
          <div className="w-full md:w-1/3 text-right">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              شركاء النجاح
            </h3>
            <p className="text-gray-500">
              نفخر بالعمل مع نخبة المطورين والجهات التمويلية في المملكة لضمان أفضل تجربة عقارية.
            </p>
          </div>

          {/* Logos */}
          <div className="w-full md:w-2/3">
            <div className="flex flex-row-reverse flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale text-center text-gray-400">

              <span className="text-2xl md:text-3xl font-black text-outline">
                DEVELOPER A
              </span>

              <span className="text-2xl md:text-3xl font-black text-outline">
                BANK SAUDI
              </span>

              <span className="text-2xl md:text-3xl font-black text-outline">
                RIYADH INV
              </span>

              <span className="text-2xl md:text-3xl font-black text-outline">
                TRUST CO
              </span>

            </div>
          </div>

        </div>

        {/* Bottom Card */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 p-6 md:p-10 bg-gray-200 rounded-3xl">

          <div className="text-right flex-1">
            <h4 className="text-xl font-bold text-blue-900 mb-2">
              ترخيص وافي المعتمد
            </h4>
            <p className="text-on-surface-variant text-gray-600 ">
              جميع مشاريعنا تحت الإنشاء حاصلة على ترخيص برنامج "وافي" للبيع على الخارطة، مما يضمن حقوقك واستثمارك بأمان تام تحت إشراف وزارة الشؤون البلدية والقروية والإسكان.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-xl shadow-md border-t-4 border-amber-900 w-full md:w-auto">
            <div className="text-center ">

              <span className="material-symbols-outlined text-amber-900 text-4xl md:text-5xl mb-2">
                verified
              </span>

              <div className="text-blue-900 font-black text-xl md:text-2xl tracking-widest">
                WAFI
              </div>

              <div className="text-xs text-gray-600 font-bold mt-1">
                تراخيص البيع على الخارطة
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}