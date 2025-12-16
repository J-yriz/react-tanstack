import { createFileRoute } from '@tanstack/react-router'
import { Rocket, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main id='main-page' className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CBCB Tech</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Fitur</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Tentang</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Kontak</a>
          </nav>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors text-sm">
            Masuk
          </button>
        </div>
      </header>

      <div className="grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-8 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Versi 2.0 Telah Hadir
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
              Bangun Masa Depan <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Digital Anda
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
              Platform all-in-one untuk mengembangkan bisnis Anda ke level berikutnya.
              Cepat, aman, dan didesain untuk pertumbuhan tanpa batas.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
                Mulai Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all">
                Pelajari Lebih Lanjut
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Tanpa Kartu Kredit</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14 Hari Gratis</span>
              </div>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-white py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Kenapa Memilih Kami?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami menggabungkan teknologi mutakhir dengan desain yang intuitif untuk memberikan pengalaman terbaik.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-amber-600" />,
                  bg: "bg-amber-100",
                  title: "Performa Kilat",
                  desc: "Optimasi tingkat tinggi memastikan aplikasi Anda berjalan mulus tanpa hambatan."
                },
                {
                  icon: <Shield className="w-6 h-6 text-emerald-600" />,
                  bg: "bg-emerald-100",
                  title: "Keamanan Bank-Grade",
                  desc: "Data Anda dilindungi dengan enkripsi standar industri dan pemantauan 24/7."
                },
                {
                  icon: <Rocket className="w-6 h-6 text-purple-600" />,
                  bg: "bg-purple-100",
                  title: "Skalabilitas Tinggi",
                  desc: "Infrastruktur yang siap tumbuh bersama bisnis Anda, dari startup hingga enterprise."
                }
              ].map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
                  <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-gray-800 p-1.5 rounded-lg">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">CBCB Tech</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} CBCB Tech Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}