"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { saveEmail } from "@/app/actions"

export default function SignupForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [savedFilePath, setSavedFilePath] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await saveEmail(email)
      
      // Debug the server action response
      console.log("Server action response:", result)

      if (result.success) {
        toast({
          title: "Success!",
          description: "You'll be notified when we launch.",
        })
        setEmail("")

        // Save the file path for display
        if (result.filePath) {
          setSavedFilePath(result.filePath)
        }

        // Log the file path where emails are saved
        console.log("Emails are being saved to:", result.filePath)
      } else {
        console.error("Email save failed with result:", result)
        toast({
          title: "Something went wrong.",
          description: result.message || "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error in form submission:", error)
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Function to test email saving
  // const testEmailSave = async () => {
  //   try {
  //     const response = await fetch("/api/test-email-save")
  //     const data = await response.json()

  //     if (data.success) {
  //       toast({
  //         title: "Test successful",
  //         description: `Test file created at ${data.publicUrl}`,
  //       })
  //     } else {
  //       toast({
  //         title: "Test failed",
  //         description: data.message,
  //         variant: "destructive",
  //       })
  //     }

  //     console.log("Test email save result:", data)
  //   } catch (error) {
  //     console.error("Error testing email save:", error)
  //     toast({
  //       title: "Test failed",
  //       description: "Could not test email saving",
  //       variant: "destructive",
  //     })
  //   }
  // }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Get notified when we launch</h3>
        <p className="text-xs sm:text-sm text-gray-500">Be the first to know when our ovens are ready!</p>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            required
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            disabled={isLoading}
          >
            {isLoading ? "Subscribing..." : "Notify Me"}
          </Button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-green-700 italic font-medium">&ldquo;Made by hand, eaten by hand&rdquo;</p>
      </div>

      <div className="text-xs text-gray-500 text-center">
        <p>We&apos;ll never share your email with anyone else.</p>

        {savedFilePath && (
          <p className="mt-2">
            Your email was saved to:
            <a
              href={savedFilePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline ml-1"
            >
              {savedFilePath}
            </a>
          </p>
        )}

        {/* <div className="mt-2 flex justify-center gap-2">
          <a href="/emails/emails.txt" target="_blank" className="text-red-600 hover:underline" rel="noreferrer">
            View all subscribers
          </a>
          <button type="button" onClick={testEmailSave} className="text-blue-600 hover:underline text-xs">
            Test email saving
          </button>
        </div> */}
      </div>
    </form>
  )
}

