"use client"

import { useEffect, useState } from "react"
import { formatTimeValue } from "@/lib/utils"

// Import the color palette to match the main page
const colors = {
  primary: "amber-600",
  primaryLight: "amber-500",
  primaryDark: "amber-700",
  secondary: "amber-50",
  accent: "amber-400",
  textDark: "gray-800",
  textMedium: "gray-600",
  textLight: "gray-500",
  white: "white",
  border: "amber-500/20",
  // Additional vibrant colors
  vibrant1: "rose-500",
  vibrant2: "emerald-500",
  vibrant3: "sky-500",
  vibrant4: "purple-500",
  vibrant5: "orange-500"
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  // Use null initial state to indicate not yet hydrated
  const [days, setDays] = useState<number | null>(null)
  const [hours, setHours] = useState<number | null>(null)
  const [minutes, setMinutes] = useState<number | null>(null)
  const [seconds, setSeconds] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  
  // Current time should only be updated on the client side
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    // Mark as mounted to indicate client-side rendering is active
    setIsMounted(true)
    
    const target = new Date(targetDate).getTime()
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = target - now
      
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000))
      }
      
      // Update current time
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }
      setCurrentTime(new Date().toLocaleTimeString('en-US', timeOptions))
    }
    
    // Initial update
    updateCountdown()
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000)
    
    // Cleanup
    return () => clearInterval(interval)
  }, [targetDate])
  
  // Show a loading state or nothing until client-side hydration is complete
  if (!isMounted) {
    return (
      <div className="w-full">
        <div className={`grid grid-cols-4 gap-2 sm:gap-4 mb-4 max-w-lg mx-auto`}>
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              className={`bg-${colors.secondary}/80 backdrop-blur-sm p-3 sm:p-4 flex flex-col items-center border border-${colors.border} shadow-sm`}
            >
              <span className={`text-${colors.primaryDark} text-2xl sm:text-3xl md:text-4xl font-bold font-serif`}>
                00
              </span>
              <span className={`text-${colors.textMedium} text-xs sm:text-sm uppercase tracking-wider mt-1 font-light`}>
                {index === 0 ? "Days" : index === 1 ? "Hours" : index === 2 ? "Mins" : "Secs"}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Define colors for each timer box
  const timerColors = [
    { bg: `${colors.secondary}`, accent: `${colors.primary}`, text: `${colors.primaryDark}`, glow: `${colors.primary}` },
    { bg: `${colors.secondary}`, accent: `${colors.vibrant1}`, text: `${colors.vibrant1}`, glow: `${colors.vibrant1}` },
    { bg: `${colors.secondary}`, accent: `${colors.vibrant2}`, text: `${colors.vibrant2}`, glow: `${colors.vibrant2}` },
    { bg: `${colors.secondary}`, accent: `${colors.vibrant3}`, text: `${colors.vibrant3}`, glow: `${colors.vibrant3}` }
  ]

  return (
    <div className="w-full">
      {/* Decorative line */}
      <div className="relative mb-6 max-w-lg mx-auto">
        <div className={`absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-${colors.accent}/30 to-transparent transform -translate-y-1/2`}></div>
        <div className="relative flex justify-center">
          <span className={`px-4 py-1 bg-${colors.white} text-${colors.textMedium} text-xs uppercase tracking-widest font-light`}>Countdown to Opening</span>
        </div>
      </div>
      
      <div className={`grid grid-cols-4 gap-2 sm:gap-4 mb-6 max-w-lg mx-auto`}>
        {[
          { value: days, label: "Days", index: 0 },
          { value: hours, label: "Hours", index: 1 },
          { value: minutes, label: "Mins", index: 2 },
          { value: seconds, label: "Secs", index: 3 }
        ].map((item, index) => (
          <div 
            key={index}
            className={`bg-${timerColors[index].bg}/80 backdrop-blur-sm p-3 sm:p-4 flex flex-col items-center border border-${colors.border} shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300`}
          >
            {/* Background effects */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${timerColors[index].accent}/10 via-transparent to-${timerColors[index].accent}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            <div className={`absolute top-0 left-0 w-full h-1 bg-${timerColors[index].accent}/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-${timerColors[index].accent}/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}></div>
            
            {/* Pulse effect on seconds */}
            {index === 3 && (
              <div className={`absolute inset-0 bg-${timerColors[index].glow}/5 animate-pulse-slow pointer-events-none`}></div>
            )}
            
            {/* Content */}
            <span className={`text-${timerColors[index].text} text-2xl sm:text-3xl md:text-4xl font-bold font-serif relative z-10 group-hover:scale-110 transition-transform duration-300`}>
              {item.value !== null ? formatTimeValue(item.value) : "00"}
            </span>
            <span className={`text-${colors.textMedium} text-xs sm:text-sm uppercase tracking-wider mt-1 font-light relative z-10 group-hover:tracking-widest transition-all duration-300`}>
              {item.label}
            </span>
            
            {/* Corner accent */}
            <div className={`absolute top-0 right-0 w-0 h-0 border-t-[12px] border-r-[12px] border-t-transparent border-r-${timerColors[index].accent}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </div>
        ))}
      </div>
      
      {isMounted && currentTime && (
        <div className="text-center relative">
          <div className={`absolute left-1/2 -top-3 w-16 h-px bg-gradient-to-r from-transparent via-${colors.accent}/40 to-transparent transform -translate-x-1/2`}></div>
          <p className={`text-${colors.textLight} text-sm font-light flex items-center justify-center`}>
            <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${colors.vibrant3} mr-2 animate-pulse`}></span>
            Current time: <span className={`font-medium text-${colors.primaryDark} ml-1 group-hover:text-${colors.primary} transition-colors duration-300`}>{currentTime}</span>
          </p>
        </div>
      )}
    </div>
  )
}

