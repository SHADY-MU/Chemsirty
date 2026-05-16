import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 mb-16 items-center">
        {/* Left Side: Image Placeholder */}
        <div className="w-full md:w-1/2 h-64 md:h-96 bg-secondary/10 rounded-3xl border border-secondary flex items-center justify-center shadow-[0_0_15px_rgba(23,229,207,0.2)]">
          <span className="text-secondary/60 text-lg">Image Placeholder</span>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Welcome to <span className="text-secondary">Chemsirty</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Join the best platform to master your subjects with comprehensive courses, lectures, and interactive study material.
          </p>
          <Link href={"/courses/all-courses"} className="bg-transparent border cursor-pointer border-secondary text-secondary hover:bg-secondary hover:text-main2 px-10 py-3 rounded-full text-xl font-bold transition-all shadow-[0_0_10px_rgba(23,229,207,0.4)] hover:shadow-[0_0_20px_rgba(23,229,207,0.8)]">
            اشترك الان
          </Link>
        </div>
      </section>

      {/* Courses Section w/ Grid */}
      <section className="flex flex-col items-center mb-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-main2 border cursor-pointer border-secondary rounded-3xl overflow-hidden shadow-[0_0_10px_rgba(23,229,207,0.1)] hover:shadow-[0_0_20px_rgba(23,229,207,0.4)] transition-all flex flex-col h-[320px]">
              <div className="flex-1 bg-white/5 flex items-center justify-center">
                <span className="text-secondary/50">Course Image</span>
              </div>
              <div className="bg-main/60 h-20 flex flex-col items-center justify-center border-t border-secondary/30 p-4">
                <h3 className="text-white font-semibold text-xl truncate w-full text-center">Price & Course Name</h3>
              </div>
            </div>
          ))}
        </div>

        <Link href={"/courses/all-courses"} className="mt-12 cursor-pointer bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-main2 px-12 py-3 rounded-full text-lg font-bold transition-all shadow-[0_0_10px_rgba(23,229,207,0.4)] hover:shadow-[0_0_20px_rgba(23,229,207,0.8)]">
          See More
        </Link>
      </section>
    </div>
  );
}
