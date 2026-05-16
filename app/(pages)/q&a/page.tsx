import React from 'react'
import { FaPaperPlane, FaImage } from 'react-icons/fa'

export default function QnAPage() {
  return (
    <div className="w-full min-h-[calc(100vh-72px)] bg-main text-white p-6 md:p-10" dir="rtl">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">

        {/* Write a Question Section */}
        <div className="bg-main2 border border-secondary rounded-3xl p-6 shadow-[0_0_15px_rgba(23,229,207,0.15)] flex flex-col gap-4 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-secondary/20 blur-3xl rounded-full"></div>

          <h2 className="text-2xl font-bold text-white mb-2">اكتب سؤالك</h2>
          <div className="relative">
            <textarea
              className="w-full bg-main border border-secondary/30 rounded-2xl p-5 min-h-[140px] text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:shadow-[0_0_10px_rgba(23,229,207,0.2)] transition-all resize-none shadow-inner text-lg"
              placeholder="....السؤال"
            ></textarea>
            <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-main px-2 py-1 rounded-full border border-gray-800">
              <button title="إرفاق صورة" className="text-gray-400 hover:text-secondary active:text-secondary transition-colors p-2 rounded-full hover:bg-white/5 active:bg-white/5 text-xl">
                <FaImage />
              </button>
              <button className="bg-secondary text-main2 p-3 rounded-full hover:brightness-110 active:brightness-110 shadow-lg shadow-secondary/20 transition-all font-bold group ml-1 text-md">
                <span className="block group-active:scale-95 transition-transform -translate-x-[1px] translate-y-[1px]">
                  <FaPaperPlane />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Questions Feed */}
        <div className="flex flex-col gap-6 mt-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-main2 border border-gray-800/80 rounded-3xl p-6 shadow-md flex flex-col gap-5 transition-all hover:border-secondary/40 active:border-secondary/40 group">

              {/* Question Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-main rounded-full flex items-center justify-center shrink-0 border border-gray-700">
                  <span className="text-xl opacity-80">👤</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg text-white group-hover:text-secondary group-active:text-secondary transition-colors">Student Name</h3>
                  <span className="text-xs text-gray-500 mt-1">منذ ساعتين</span>
                </div>
              </div>

              {/* Question Body */}
              <div className="bg-main rounded-2xl p-5 text-gray-300 min-h-[100px] flex items-center justify-center border border-gray-800 shadow-inner">
                <span className="opacity-50 text-sm">محتوى السؤال أو الصورة המرفقة هنا...</span>
              </div>

              {/* Reply Section */}
              <div className="relative mt-2">
                {/* Connecting line */}
                <div className="absolute right-6 -top-3 bottom-8 w-[2px] bg-gray-800 rounded-full"></div>

                <div className="flex gap-4 items-start pr-1 relative z-10 w-full mt-4">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center shrink-0 border border-secondary mt-2">
                    <span className="text-secondary font-bold text-sm">A</span>
                  </div>
                  <div className="flex flex-col bg-[#1e4d56]/20 border border-[#1e4d56]/50 rounded-2xl p-5 flex-1 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-sm text-secondary">Admin Name</h4>
                      <span className="text-xs text-secondary/60">منذ ساعة</span>
                    </div>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      هذا رد افتراضي على سؤالك. سيقوم المشرف بالإجابة هنا وستظهر الإجابة بهذا الشكل.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
