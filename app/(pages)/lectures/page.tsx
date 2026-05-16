import React from 'react'

export default function LecturesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 min-h-screen flex flex-col items-center text-white" dir="rtl">

      {/* Tabs */}
      <div className="flex justify-center gap-4 md:gap-8 mb-16 flex-wrap">
        <button className="px-10 py-3 rounded-full border-2 border-secondary text-secondary font-bold text-xl shadow-[0_0_15px_rgba(23,229,207,0.5)] bg-main2 transition-all">
          المحاضرات
        </button>
        <button className="px-10 py-3 rounded-full border-2 border-teal-800 text-teal-600 font-bold text-xl hover:border-secondary active:border-secondary hover:text-secondary active:text-secondary transition-all bg-main2/50 hover:shadow-[0_0_15px_rgba active:shadow-[0_0_15px_rgba(23,229,207,0.3)]">
          الامتحانات
        </button>
        <button className="px-10 py-3 rounded-full border-2 border-teal-800 text-teal-600 font-bold text-xl hover:border-secondary active:border-secondary hover:text-secondary active:text-secondary transition-all bg-main2/50 hover:shadow-[0_0_15px_rgba active:shadow-[0_0_15px_rgba(23,229,207,0.3)]">
          المراجعات
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-main2 border border-secondary/30 rounded-3xl overflow-hidden shadow-[0_0_10px_rgba(23,229,207,0.1)] hover:shadow-[0_0_20px_rgba active:shadow-[0_0_20px_rgba(23,229,207,0.4)] transition-all flex flex-col h-[320px]">
            <div className="flex-1 bg-white/5 flex items-center justify-center">
              <span className="text-secondary/50 font-semibold">Course Image</span>
            </div>
            <div className="bg-main/60 h-20 flex flex-col items-center justify-center border-t border-secondary/30 p-4">
              <h3 className="text-white font-semibold text-xl truncate w-full text-center">Price & Course Name</h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
