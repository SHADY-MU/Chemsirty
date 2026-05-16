import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaLock } from 'react-icons/fa'

export default function LogInPage() {
  return (
    <div className="w-full min-h-[calc(100vh-72px)] bg-main flex items-center justify-center p-6 py-12" dir="rtl">
      <div className="w-full max-w-md bg-main2 border border-secondary/20 rounded-3xl p-8 shadow-[0_0_20px_rgba(23,229,207,0.15)] relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/20 blur-[50px] rounded-full"></div>

        <div className="text-center mb-8 relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">مرحباً بك مجدداً</h1>
          <p className="text-gray-400">سجل دخولك لمتابعة الكورسات الخاصة بك</p>
        </div>

        <form className="flex flex-col gap-5 relative z-10">
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

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-700 bg-main text-secondary focus:ring-secondary focus:ring-offset-main accent-secondary cursor-pointer" />
              <span className="text-gray-400 group-hover:text-gray-300 group-active:text-gray-300 transition-colors">تذكرني</span>
            </label>
            <Link href="#" className="text-secondary hover:text-white active:text-white transition-colors">
              هل نسيت كلمة المرور؟
            </Link>
          </div>

          <button className="mt-4 w-full bg-secondary text-main2 font-bold text-lg py-3 rounded-xl hover:brightness-110 active:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(23,229,207,0.4)]">
            تسجيل الدخول
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8 relative z-10">
          لا تمتلك حساب؟{' '}
          <Link href="/signIn" className="text-secondary font-bold hover:text-white active:text-white transition-colors">
            إنشاء حساب جديد
          </Link>
        </p>
      </div>
    </div>
  )
}
