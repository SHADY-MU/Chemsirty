"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { FaHome, FaBook, FaChevronRight, FaChevronLeft, FaBars, FaTimes } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const [isOpenDesktop, setIsOpenDesktop] = useState(false);
  const pathname = usePathname();

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href  ;
    return `flex items-center gap-3 py-3 px-3 rounded-md transition-all shadow-sm overflow-hidden border-r-4 ${isActive
        ? 'bg-[#1e4d56] text-secondary border-secondary brightness-110'
        : 'hover:bg-[#1e4d56]/50 text-gray-300 hover:text-white border-transparent hover:border-gray-500'
      }`;
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[80vh] bg-main relative" dir="rtl">

      {/* Mobile Toggle Banner */}
      <div className="md:hidden w-full flex p-3 bg-main2 border-b border-secondary/20">
        <button
          onClick={() => setIsOpenMobile(true)}
          className="bg-[#1e4d56] text-white p-2 px-3 text-lg rounded-md flex items-center gap-2 hover:brightness-110 transition-all"
        >
          <FaBars />
          <span className="text-sm font-bold">القائمة</span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity"
          onClick={() => setIsOpenMobile(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          transition-all duration-300 bg-main2 flex flex-col pt-6 pb-6 shadow-[0_0_15px_rgba(23,229,207,0.1)] border-l-2 border-secondary/60 border-t-2
          
          /* Mobile styles: Off-canvas right drawer */
          fixed top-0 right-0 h-full z-[60] translate-x-full w-64 px-4
          ${isOpenMobile ? '!translate-x-0' : ''}
          
          /* Desktop styles: Sticky sidebar offset below Navbar */
          md:sticky md:top-[72px] md:translate-x-0 md:h-[calc(100vh-72px)] md:z-20
          ${isOpenDesktop ? 'md:w-64 md:px-4' : 'md:w-20 md:px-2'}
        `}
      >

        {/* Mobile close button */}
        <div className="md:hidden w-full flex justify-start mb-6">
          <button onClick={() => setIsOpenMobile(false)} className="text-white text-2xl hover:text-secondary">
            <FaTimes />
          </button>
        </div>

        {/* Collapse Button (Desktop) */}
        <div className="w-full justify-end mb-10 relative hidden md:flex">
          <button
            onClick={() => setIsOpenDesktop(!isOpenDesktop)}
            className="bg-black border border-gray-800 text-white p-2 rounded hover:bg-secondary hover:text-black transition-all absolute left-0 top-0 z-10 flex items-center justify-center w-8 h-8"
          >
            <span className="text-xs">{isOpenDesktop ? <FaChevronRight /> : <FaChevronLeft />}</span>
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <Link href="/courses" className={getLinkClasses("/courses")} onClick={() => setIsOpenMobile(false)}>
            <span className="text-xl shrink-0"><FaHome /></span>
            <span className={`text-lg font-bold whitespace-nowrap transition-all duration-300 ${(isOpenDesktop || isOpenMobile) ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 md:hidden'}`}>الرئيسية</span>
          </Link>
          <Link href="courses/all-courses" className={getLinkClasses("/courses/all-courses")} onClick={() => setIsOpenMobile(false)}>
            <span className="text-xl shrink-0"><FaBook /></span>
            <span className={`text-lg font-bold whitespace-nowrap transition-all duration-300 ${(isOpenDesktop || isOpenMobile) ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 md:hidden'}`}>الكورسات</span>         
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full bg-main overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
