import { Link } from '@tanstack/react-router'
import { ArrowLeft, FileQuestion, Home } from 'lucide-react'

export function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
            <div className="max-w-md w-full text-center">
                {/* Icon Container */}
                <div className="mb-8 relative inline-block">
                    <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75"></div>
                    <div className="relative bg-white p-6 rounded-full shadow-xl border border-gray-100">
                        <FileQuestion className="w-16 h-16 text-blue-600" />
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-9xl font-black text-gray-200 mb-4 select-none">404</h1>

                <div className="relative">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Halaman Tidak Ditemukan
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Maaf, kami tidak dapat menemukan halaman yang Anda cari. Mungkin halaman tersebut sudah dihapus atau alamat URL salah.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all font-medium group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Kembali
                        </button>

                        <Link
                            to="/"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 font-medium"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Ke Beranda
                        </Link>
                    </div>
                </div>

                {/* Footer Help Text */}
                <p className="mt-12 text-sm text-gray-400">
                    Butuh bantuan? <a href="#" className="text-blue-600 hover:underline">Hubungi Support</a>
                </p>
            </div>
        </div>
    )
}