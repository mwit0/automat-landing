import Image from "next/image";
import jumboSrc from "@/public/jumbo.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-black">
              AutoTask
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                Usługi
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                O nas
              </a>
              <a href="#" className="text-black hover:text-gray-600 transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* SVG Graphic - Shows first on mobile, second on desktop */}
            <div className="lg:w-1/2 order-1 lg:order-2 mb-12 lg:mb-0">
              <Image
                src={jumboSrc}
                alt="Jumbotron"
                className="w-full max-w-2xs lg:max-w-md mx-auto"
              />
            </div>

            {/* Text Content - Shows second on mobile, first on desktop */}
            <div className="lg:w-1/2 lg:pr-12 order-2 lg:order-1">
              <h1 className="text-[1.75rem] md:text-4xl xl:text-[2.75rem] font-black text-black mb-6 leading-tight">
                Skup się na wzroście.<br />
                Resztę zautomatyzujemy.
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Świadczymy usługi automatyzacji procesów biznesowych dla małych i średnich przedsiębiorstw.
                Pozwól nam usprawnić Twoje operacje, abyś mógł się skupić na rozwoju swojego biznesu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Rozpocznij automatyzację
                </button>
                <button className="border border-black text-black px-8 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-colors">
                  Dowiedz się więcej
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
