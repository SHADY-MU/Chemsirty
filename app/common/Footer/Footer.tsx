import React from 'react'
import Link from 'next/link'
import { FaUser, FaQuestionCircle, FaBookOpen, FaVideo, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-[#1c0b2b] w-full pt-8 pb-4 border-t border-secondary/30'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col gap-6 justify-between items-center h-full'>

        {/* Navigation Buttons Row */}
        <div className='flex flex-wrap justify-center gap-4 w-full'>
          <Link href="/profile" className='flex items-center gap-2 px-6 py-2 rounded-full border border-secondary/60 text-secondary hover:bg-secondary active:bg-secondary hover:text-[#1c0b2b] active:text-[#1c0b2b] transition-all'>
            <span className="text-lg"><FaUser /></span>
            <span className='font-semibold'>Profile</span>
          </Link>
          <Link href="/q&a" className='flex items-center gap-2 px-6 py-2 rounded-full border border-secondary/60 text-secondary hover:bg-secondary active:bg-secondary hover:text-[#1c0b2b] active:text-[#1c0b2b] transition-all'>
            <span className="text-lg"><FaQuestionCircle /></span>
            <span className='font-semibold'>Q&A</span>
          </Link>
          <Link href="/courses" className='flex items-center gap-2 px-6 py-2 rounded-full border border-secondary/60 text-secondary hover:bg-secondary active:bg-secondary hover:text-[#1c0b2b] active:text-[#1c0b2b] transition-all'>
            <span className="text-lg"><FaBookOpen /></span>
            <span className='font-semibold'>Courses</span>
          </Link>
          <Link href="/lectures" className='flex items-center gap-2 px-6 py-2 rounded-full border border-secondary/60 text-secondary hover:bg-secondary active:bg-secondary hover:text-[#1c0b2b] active:text-[#1c0b2b] transition-all'>
            <span className="text-lg"><FaVideo /></span>
            <span className='font-semibold'>Lectures</span>
          </Link>
        </div>

        {/* Developer Credit */}
        <div className='flex flex-col md:flex-row items-center justify-between w-full mt-4 pt-4 border-t border-secondary/20'>
          <div className='flex gap-4 text-secondary mb-4 md:mb-0'>
            <a href="#" className='hover:text-white active:text-white transition-colors'><span className="text-xl"><FaGithub /></span></a>
            <a href="#" className='hover:text-white active:text-white transition-colors'><span className="text-xl"><FaLinkedin /></span></a>
            <a href="#" className='hover:text-white active:text-white transition-colors'><span className="text-xl"><FaTwitter /></span></a>
          </div>
          <p className='text-sm text-gray-300'>
            Developed & Designed By <span className='text-yellow-500 font-bold ml-1'>Shady Mustafa</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
