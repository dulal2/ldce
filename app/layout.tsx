import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GoogleAd from "@/components/GoogleAd"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QuizMaster",
  description: "Test your knowledge with our quizzes",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-100">
            <div className="py-12 px-4 sm:px-6 lg:px-8">{children}</div>
            <div className="max-w-3xl mx-auto mt-8">
              <GoogleAd client="ca-pub-7206030569003059" slot="1522923677" />
            </div>
          </main>
          <Footer />
        </div>
        {/* Move the script to pages/_document.js or use next/script for better performance */}
      </body>
    </html>
  )
}

