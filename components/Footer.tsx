"use client"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Footer() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Privacy & Terms */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">&copy; 2025 LDCE GTM Quiz. Updated 15/02/2025.</p>
          <div className="mt-2 space-x-4">
            {/* Privacy Policy Button */}
            <button onClick={() => setOpenDialog("privacy")} className="text-blue-600 hover:underline">
              Privacy Policy
            </button>

            {/* Terms & Conditions Button */}
            <button onClick={() => setOpenDialog("terms")} className="text-blue-600 hover:underline">
              Terms & Conditions
            </button>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex mt-4 md:mt-0 space-x-6">
          <Link href="https://www.facebook.com/profile.php?id=61562304629860" className="text-gray-500 hover:text-gray-700">
            Facebook
          </Link>
          <Link href="https://twitter.com/dulalmajee31" className="text-gray-500 hover:text-gray-700">
            Twitter
          </Link>
          <Link href="https://www.instagram.com/quiz.us" className="text-gray-500 hover:text-gray-700">
            Instagram
          </Link>
        </div>
      </div>

      {/* Dialog Modals */}
      <Dialog open={openDialog === "privacy"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
            <DialogDescription>
              <p className="mt-2">We respect your privacy and are committed to protecting your personal data:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>We do not collect any personal information through this quiz.</li>
                <li>Your quiz results are not stored or shared with any third parties.</li>
                <li>We use cookies only for essential functionality of the quiz.</li>
                <li>By using this quiz, you consent to this privacy policy.</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={openDialog === "terms"} onOpenChange={() => setOpenDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terms & Conditions</DialogTitle>
            <DialogDescription>
              <p className="mt-2">By using this quiz, you agree to the following terms:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>This quiz is for educational purposes only.</li>
                <li>You will not share or distribute the questions or answers.</li>
                <li>We are not responsible for any errors or inaccuracies in the quiz content.</li>
                <li>We reserve the right to modify or terminate the quiz at any time.</li>
              </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </footer>
  )
}

