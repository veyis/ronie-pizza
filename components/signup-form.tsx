"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { saveEmail } from "@/app/actions"

export default function SignupForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: "success" | "error" | "idle";
    message: string;
  }>({ type: "idle", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset status
    setStatus({ type: "idle", message: "" })

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address."
      })
      return
    }

    setIsLoading(true)

    try {
      const result = await saveEmail(email)

      if (result.success) {
        setEmail("")
        setStatus({
          type: "success",
          message: "You'll be notified when we launch. Thank you for your interest!"
        })
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to save your email. Please try again later."
        })
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to save your email. Please try again later."
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-2">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Get notified when we launch</h3>
        <p className="text-xs sm:text-sm text-gray-500">Be the first to know when our ovens are ready!</p>
      </div>

      {status.type !== "idle" && (
        <div className={`p-3 rounded-md text-sm ${
          status.type === "success" 
            ? "bg-green-50 text-green-800 border border-green-200" 
            : "bg-red-50 text-red-800 border border-red-200"
        }`}>
          {status.message}
        </div>
      )}

      {status.type !== "success" ? (
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
      ) : (
        <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h4 className="text-lg font-medium text-green-800 mb-1">Thank You!</h4>
          <p className="text-sm text-green-700">We&apos;ll send you updates about our grand opening.</p>
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-sm text-green-700 italic font-medium">&ldquo;Made by hand, eaten by hand&rdquo;</p>
      </div>

      <div className="text-xs text-gray-500 text-center">
        <p>We&apos;ll never share your email with anyone else.</p>
      </div>
    </form>
  )
}

