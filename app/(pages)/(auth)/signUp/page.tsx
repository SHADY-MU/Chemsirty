import React from 'react'
import Link from 'next/link'
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa'

export default function SignUpPage() {
  return (
    <div className="w-full min-h-[calc(100vh-72px)] bg-main flex items-center justify-center p-6 py-12" dir="rtl">
      <div className="w-full max-w-lg bg-main2 border border-secondary/20 rounded-3xl p-8 shadow-[0_0_20px_rgba(23,229,207,0.15)] relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 blur-[60px] rounded-full"></div>

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">إنشاء حساب جديد</h1>
          <p className="text-gray-400">انضم إلينا وابدأ رحلة التعلم الآن</p>
        </div>

        <form className="flex flex-col gap-4 relative z-10">
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-semibold">الاسم الكامل</label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="أحمد محمد"
                className="w-full bg-main border border-gray-700 rounded-xl py-3 pr-11 pl-4 text-white focus:outline-none focus:border-secondary focus:shadow-[0_0_10px_rgba(23,229,207,0.2)] transition-all placeholder-gray-600"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-semibold">رقم الهاتف</label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaPhone />
              </span>
              <input
                type="tel"
                placeholder="01xxxxxxxxx"
                className="w-full bg-main border border-gray-700 rounded-xl py-3 pr-11 pl-4 text-white focus:outline-none focus:border-secondary focus:shadow-[0_0_10px_rgba(23,229,207,0.2)] transition-all placeholder-gray-600 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-semibold">رقم ولي الأمر</label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaPhone />
              </span>
              <input
                type="tel"
                placeholder="01xxxxxxxxx"
                className="w-full bg-main border border-gray-700 rounded-xl py-3 pr-11 pl-4 text-white focus:outline-none focus:border-secondary focus:shadow-[0_0_10px_rgba(23,229,207,0.2)] transition-all placeholder-gray-600 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-semibold">البريد الإلكتروني</label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full bg-main border border-gray-700 rounded-xl py-3 pr-11 pl-4 text-white focus:outline-none focus:border-secondary focus:shadow-[0_0_10px_rgba(23,229,207,0.2)] transition-all placeholder-gray-600"
                style={{ direction: 'ltr' }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm font-semibold">كلمة المرور</label>
            <div className="relative">
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="********"
                className="w-full bg-main border border-gray-700 rounded-xl py-3 pr-11 pl-4 text-white focus:outline-none focus:border-secondary focus:shadow-[0_0_10px_rgba(23,229,207,0.2)] transition-all placeholder-gray-600 outline-none"
                style={{ direction: 'ltr' }}
              />
            </div>
          </div>

          <button className="mt-4 w-full bg-secondary text-main2 font-bold text-lg py-3 rounded-xl hover:brightness-110 active:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(23,229,207,0.4)]">
            إنشاء حساب
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 relative z-10">
          لديك حساب بالفعل؟{' '}
          <Link href="/logIn" className="text-secondary font-bold hover:text-white active:text-white transition-colors">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  )
}
