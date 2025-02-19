import Link from "next/link"
import Image from "next/image"
import { Home, Info, Mail, Clock } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-gray-50">
                <Image
                  src="/logo.png"
                  alt="ldceGtm Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-2xl font-serif font-bold">LdceGtm</span>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-5">
              <li>
              <Link href="/mock-test">
              <button className="ml-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition transform hover:-translate-y-1 duration-300">
                Mock Test
              </button>
            </Link>
              </li>
              <li>
                <Link href="/" className="flex items-center space-x-1 hover:text-gray-600 transition-colors">
                  <Home className="w-4 h-4" />
                  <span>home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center space-x-1 hover:text-gray-600 transition-colors">
                  <Info className="w-4 h-4" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center space-x-1 hover:text-gray-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}


