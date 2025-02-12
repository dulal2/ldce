import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            {/* Logo Component */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src="/logo.png"  // Ensure this file is inside the `public/` folder
                alt="LdceQuizz Logo"
                width={120}
                height={120}
                className="object-cover"
                priority
              />
            </div>
            {/* Brand Name */}
            <Link href="/" className="text-2xl font-bold text-gray-900">
              LdceQuizz
            </Link>
          </div>
          {/* Navigation Menu */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
