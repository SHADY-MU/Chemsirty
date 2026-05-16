import React from 'react'
import { FaEnvelope, FaPhone, FaBookOpen, FaGraduationCap, FaStar } from 'react-icons/fa'

export default function ProfilePage() {
  return (
    <div className="w-full min-h-[calc(100vh-72px)] bg-main p-6 md:p-10" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* User Card (Sidebar) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-main2 border border-secondary/30 rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_0_20px_rgba(23,229,207,0.1)] relative overflow-hidden group">
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-secondary/20 to-transparent transition-all group-hover:from-secondary/30 group-active:from-secondary/30"></div>

            <div className="w-32 h-32 bg-main border-4 border-main2 outline outline-secondary/50 rounded-full flex items-center justify-center relative z-10 mb-4 shadow-xl overflow-hidden transition-transform group-hover:scale-105 group-active:scale-105">
              <span className="text-5xl">👤</span>
            </div>

            <h2 className="text-2xl font-bold text-white mb-1 relative z-10">أحمد محمد</h2>
            <p className="text-secondary mb-6 relative z-10 font-medium">طالب متميز</p>

            <div className="w-full flex justify-between items-center bg-main p-4 rounded-xl border border-gray-800 relative z-10 shadow-inner">
              <div className="flex flex-col items-center gap-1 w-1/2 border-l border-gray-700/50">
                <span className="text-gray-400 text-sm">الباقات</span>
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <div className="flex flex-col items-center gap-1 w-1/2">
                <span className="text-gray-400 text-sm">محاضرات</span>
                <span className="text-white font-bold text-lg">15</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-main2 border border-gray-800 rounded-3xl p-6 shadow-lg flex flex-col gap-4 hover:border-gray-700 active:border-gray-700 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 border-b border-gray-800 pb-2">معلومات التواصل</h3>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-full bg-main flex items-center justify-center text-secondary shadow-inner">
                <FaEnvelope />
              </div>
              <span className="text-sm font-mono tracking-wide">ahmed@example.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-full bg-main flex items-center justify-center text-secondary shadow-inner">
                <FaPhone />
              </div>
              <span className="text-sm font-mono tracking-wide" dir="ltr">+20 123 456 7890</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-full bg-main flex items-center justify-center text-secondary shadow-inner" title="رقم ولي الأمر">
                <FaPhone />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-xs text-secondary/60">رقم ولي الأمر</span>
                <span className="text-sm font-mono tracking-wide" dir="ltr">+20 123 456 7891</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white mb-2">لوحة التحكم</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-main2 border border-gray-800 rounded-3xl p-6 shadow-lg flex gap-4 items-center transition-all hover:border-secondary/30 active:border-secondary/30 hover:shadow-[0_0_15px_rgba active:shadow-[0_0_15px_rgba(23,229,207,0.1)] cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl border border-secondary/20 shadow-inner">
                <FaBookOpen />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-widest">4</span>
                <span className="text-gray-400 text-sm">كورسات مسجل بها</span>
              </div>
            </div>

            <div className="bg-main2 border border-gray-800 rounded-3xl p-6 shadow-lg flex gap-4 items-center transition-all hover:border-purple-500/30 active:border-purple-500/30 hover:shadow-[0_0_15px_rgba active:shadow-[0_0_15px_rgba(168,85,247,0.1)] cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-3xl border border-purple-500/20 shadow-inner">
                <FaGraduationCap />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white tracking-widest">12</span>
                <span className="text-gray-400 text-sm">اختبار مجتاز</span>
              </div>
            </div>

          </div>

          {/* Recent Activity */}
          <div className="bg-main2 border border-gray-800 rounded-3xl flex flex-col mt-2 shadow-xl overflow-hidden group">
            <div className="p-6 border-b border-gray-800 bg-black/20 flex justify-between items-center transition-colors group-hover:bg-black/30 group-active:bg-black/30">
              <h3 className="text-xl font-bold text-white">الكورسات الحالية</h3>
              <button className="text-secondary text-sm hover:underline active:underline hover:text-white active:text-white transition-colors">عرض الكل</button>
            </div>

            <div className="p-6 flex flex-col gap-4">
              {[1, 2].map((course) => (
                <div key={course} className="bg-main flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between p-4 rounded-2xl border border-gray-800 hover:border-secondary/50 active:border-secondary/50 transition-all shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-gray-700 text-yellow-500 text-lg shadow-xl drop-shadow-md">
                      <FaStar />
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-bold text-lg">كورس الكيمياء العضوية المتقدم</h4>
                      <span className="text-gray-500 text-xs mt-1">اخر تفاعل: منذ يومين</span>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-2.5 bg-secondary/10 text-secondary border border-secondary rounded-xl hover:bg-secondary active:bg-secondary hover:text-main2 active:text-main2 transition-all shadow-[0_0_10px_rgba(23,229,207,0.1)] hover:shadow-none active:shadow-none text-sm font-bold active:scale-95">
                    متابعة التعلم
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
