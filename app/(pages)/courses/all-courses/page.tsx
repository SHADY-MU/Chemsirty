import React from 'react'

export default function AllCoursesPage() {
  return (
    <div className="w-full p-6 md:p-10 text-white flex flex-col h-full bg-main">
      <h1 className="text-3xl font-bold mb-8 text-right">جميع الكورسات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((course) => (
          <div key={course} className="bg-main2 border border-secondary/30 rounded-2xl overflow-hidden shadow-lg flex flex-col transition-transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(23,229,207,0.3)]">
            {/* Image Placeholder */}
            <div className="h-44 bg-white/5 flex items-center justify-center relative group">
              <span className="text-secondary/40 font-semibold transition-opacity group-hover:opacity-0">صورة الكورس</span>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <button className="bg-secondary/20 text-secondary border border-secondary px-4 py-2 rounded-full font-bold hover:bg-secondary hover:text-main2 transition-all">
                  معاينة الكورس
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4 flex-1 border-t border-secondary/20">
              <h3 className="text-xl font-bold text-center text-white">اسم الكورس المتاح</h3>

              <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1">المدة</span>
                  <span className="font-mono bg-white/5 px-2 py-1 rounded text-secondary">20 ساعة</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1">السعر</span>
                  <span className="font-mono bg-white/5 px-2 py-1 rounded text-secondary font-bold">500 ج.م</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-secondary cursor-pointer text-main2 hover:brightness-110 font-bold py-3 rounded-full transition-all shadow-[0_0_10px_rgba(23,229,207,0.5)] active:scale-95">
                اشترك الآن
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
