"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [currentTime, setCurrentTime] = useState("")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date()
      
      // Only update the current time on the client side
      setCurrentTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }))

      const difference = target - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-2 sm:p-3 text-white shadow-md transform transition-transform hover:scale-105 duration-300">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-[10px] sm:text-xs uppercase font-medium tracking-wider">Days</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-2 sm:p-3 text-white shadow-md transform transition-transform hover:scale-105 duration-300">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-[10px] sm:text-xs uppercase font-medium tracking-wider">Hours</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-2 sm:p-3 text-white shadow-md transform transition-transform hover:scale-105 duration-300">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-[10px] sm:text-xs uppercase font-medium tracking-wider">Mins</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-2 sm:p-3 text-white shadow-md transform transition-transform hover:scale-105 duration-300">
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-[10px] sm:text-xs uppercase font-medium tracking-wider">Secs</div>
        </div>
      </div>
      {isMounted && (
        <p className="text-xs sm:text-sm text-gray-500 text-center font-medium">Current time: {currentTime}</p>
      )}
    </div>
  )
}

