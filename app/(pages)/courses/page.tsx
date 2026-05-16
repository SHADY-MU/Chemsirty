import React from 'react'

export default function CoursesPage() {
  return (
    <div className="w-full p-6 md:p-10 text-white flex flex-col h-full bg-main">
      <h1 className="text-3xl font-bold mb-8 text-right">الكورسات اللي مشترك فيها</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6].map((course) => (
          <div key={course} className="bg-main2 border border-secondary/30 rounded-2xl overflow-hidden shadow-lg flex flex-col transition-transform hover:-translate-y-1 active:-translate-y-1 hover:shadow-[0_0_15px_rgba active:shadow-[0_0_15px_rgba(23,229,207,0.3)]">
            {/* Image Placeholder */}
            <div className="h-44 bg-white/5 flex items-center justify-center">
              <span className="text-secondary/40 font-semibold">صورة الكورس</span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4 flex-1 border-t border-secondary/20">
              <h3 className="text-xl font-bold text-center text-white">اسم الكورس</h3>

              <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1">تاريخ الانشاء</span>
                  <span className="font-mono bg-white/5 px-2 py-1 rounded">2024-01-01</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1">اخر تحديث</span>
                  <span className="font-mono bg-white/5 px-2 py-1 rounded">2024-05-01</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-secondary cursor-pointer text-main2 hover:brightness-110 active:brightness-110 font-bold py-3 rounded-full transition-all shadow-[0_0_10px_rgba(23,229,207,0.5)] active:scale-95">
                الدخول للكورس
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
