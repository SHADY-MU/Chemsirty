import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-8 mb-16 items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 bg-secondary/10 rounded-3xl border border-secondary flex flex-col shadow-[0_0_15px_rgba(23,229,207,0.2)] overflow-hidden">
          <Image src="/MR.jpg" width={1000} height={1000} className="w-full h-auto block" alt="الصورة الرئيسية" priority />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            مرحبًا بك في <span className="text-secondary">Chemsirty</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            انضم إلى أفضل منصة لتعلّم المواد الدراسية من خلال كورسات شاملة،
            ومحاضرات مميزة، ومواد تعليمية تفاعلية تساعدك على التفوق.
          </p>

          <Link
            href={"/courses/all-courses"}
            className="btn-outline-glow px-10 py-3 text-xl"
          >
            اشترك الآن
          </Link>
        </div>
      </section>

      {/* Courses Section w/ Grid */}
      <section className="flex flex-col items-center mb-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card-glow flex flex-col h-[320px]">
              <div className="flex-1 bg-white/5 flex items-center justify-center">
                <span className="text-secondary/50">Course Image</span>
              </div>
              <div className="bg-main/60 h-20 flex flex-col items-center justify-center border-t border-secondary/30 p-4">
                <h3 className="text-white font-semibold text-xl truncate w-full text-center">Price & Course Name</h3>
              </div>
            </div>
          ))}
        </div>

        <Link href={"/courses/all-courses"} className="btn-outline-glow px-12 py-3 mt-12 text-lg">
          See More
        </Link>
      </section>
    </div>
  );
}
