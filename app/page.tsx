import Image from "next/image"
import CountdownTimer from "@/components/countdown-timer"
import SignupForm from "@/components/signup-form"
import StoreInfo from "@/components/store-info"
import { formatDate } from "@/lib/utils"

export default function ComingSoonPage() {
  // Calculate a date 29 days from now
  const today = new Date()
  const targetDate = new Date(today)
  targetDate.setDate(today.getDate() + 16)

  // Format the target date for display
  const formattedOpeningDate = formatDate(targetDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-64 h-64 rounded-full bg-green-500 blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 w-64 h-64 rounded-full bg-yellow-500 blur-3xl"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center mb-6 sm:mb-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6 transform transition-transform duration-500 hover:scale-105">
          <Image
            src="/logo.png"
            alt="Ronnie Pizza Logo"
            width={600}
            height={300}
            className="max-w-[350px] sm:max-w-[400px] h-auto"
            priority
          />
        </div>
<br />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-800 mb-2 sm:mb-4 tracking-tight">
          
          Coming Soon!
        </h1>
  
      </div>

      <div className="w-full max-w-3xl relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 border border-gray-100 backdrop-blur-sm transform transition-all duration-500 hover:shadow-2xl">
          <div className="p-5 sm:p-8">
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                We&apos;re Firing Up Our Ovens
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                We&apos;re working hard to bring you the most delicious hand-crafted pizza. Our authentic recipes and fresh
                ingredients are almost ready to serve you.
              </p>

              <div className="mb-2">
                <h3 className="text-base sm:text-lg font-medium text-gray-700 mb-3">
                  Opening On: <span className="text-red-600 font-semibold">{formattedOpeningDate}</span>
                </h3>
              </div>

              <div className="mb-6 sm:mb-8">
                <CountdownTimer targetDate={targetDate.toISOString()} />
              </div>
            </div>

            <div className="max-w-md mx-auto">
              <SignupForm />
            </div>
          </div>
        </div>

        {/* Store Information Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 border border-gray-100">
          <div className="p-5 sm:p-6">
            <StoreInfo address="549 Main St. West Haven CT 06516" phone="1 203 535 02 00" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs sm:text-sm relative z-10">
        <p>© {new Date().getFullYear()} Ronnie Pizza. All rights reserved.</p>
        <p className="mt-1">
          <a href="https://www.ronniepizza.com" className="hover:text-red-500 transition-colors">
            www.ronniepizza.com
          </a>
        </p>
      </div>
    </div>
  )
}

