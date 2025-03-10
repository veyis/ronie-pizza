"use client"

import { useEffect, useState } from "react"

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

interface StoreInfoProps {
  address: string
  phone: string
}

export default function StoreInfo({ address, phone }: StoreInfoProps) {
  const [showMap, setShowMap] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [activeSection, setActiveSection] = useState<number | null>(null)
  
  // Format the address for Google Maps URL
  const formattedAddress = encodeURIComponent(address)
  
  // Extract hours information
  const hours = {
    monday: "11:00 AM - 10:00 PM",
    tuesday: "11:00 AM - 10:00 PM",
    wednesday: "11:00 AM - 10:00 PM",
    thursday: "11:00 AM - 10:00 PM",
    friday: "11:00 AM - 11:00 PM",
    saturday: "11:00 AM - 11:00 PM",
    sunday: "12:00 PM - 9:00 PM"
  }

  // Set mounted state on client-side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Define colors for each info section
  const sectionColors = [
    { bg: colors.secondary, icon: colors.primary, accent: colors.primary },
    { bg: colors.secondary, icon: colors.vibrant1, accent: colors.vibrant1 },
    { bg: colors.secondary, icon: colors.vibrant2, accent: colors.vibrant2 }
  ]

  return (
    <div className="w-full">
      {/* Decorative line */}
      <div className="relative mb-6 max-w-lg mx-auto">
        <div className={`absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-${colors.accent}/30 to-transparent transform -translate-y-1/2`}></div>
        <div className="relative flex justify-center">
          <span className={`px-4 py-1 bg-${colors.white} text-${colors.textMedium} text-xs uppercase tracking-widest font-light`}>Contact Information</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Address Section */}
          <div 
            className="flex items-start group" 
            onMouseEnter={() => setActiveSection(0)} 
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className={`mr-4 flex-shrink-0 p-2 bg-${sectionColors[0].bg} rounded-full relative overflow-hidden transition-all duration-300 group-hover:shadow-md ${activeSection === 0 ? `ring-2 ring-${sectionColors[0].accent}/20` : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-${sectionColors[0].accent}/10 via-transparent to-${sectionColors[0].accent}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-${sectionColors[0].accent}/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}></div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-${sectionColors[0].icon} relative z-10 group-hover:scale-110 transition-transform duration-300`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className={`text-${sectionColors[0].accent} font-medium uppercase tracking-wider text-sm mb-1 font-serif group-hover:tracking-widest transition-all duration-300 relative inline-block`}>
                Address
                <span className={`absolute -bottom-px left-0 w-full h-px bg-${sectionColors[0].accent}/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></span>
              </h4>
              <div className={`h-px w-16 bg-gradient-to-r from-transparent via-${sectionColors[0].accent}/30 to-transparent mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              <p className={`text-${colors.textMedium} font-light group-hover:text-${colors.textDark} transition-colors duration-300`}>{address}</p>
              {isMounted && (
                <button 
                  onClick={() => setShowMap(!showMap)}
                  className={`mt-2 text-${sectionColors[0].accent} hover:text-${colors.primary} text-sm font-medium transition-colors duration-200 flex items-center group-hover:translate-x-1 transform transition-transform`}
                >
                  <span className="relative">
                    {showMap ? "Hide Map" : "Show Map"}
                    <span className={`absolute -bottom-px left-0 w-full h-px bg-${sectionColors[0].accent}/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></span>
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d={showMap ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} 
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          
          {/* Phone Section */}
          <div 
            className="flex items-start group"
            onMouseEnter={() => setActiveSection(1)} 
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className={`mr-4 flex-shrink-0 p-2 bg-${sectionColors[1].bg} rounded-full relative overflow-hidden transition-all duration-300 group-hover:shadow-md ${activeSection === 1 ? `ring-2 ring-${sectionColors[1].accent}/20` : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-${sectionColors[1].accent}/10 via-transparent to-${sectionColors[1].accent}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-${sectionColors[1].accent}/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}></div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-${sectionColors[1].icon} relative z-10 group-hover:scale-110 transition-transform duration-300`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className={`text-${sectionColors[1].accent} font-medium uppercase tracking-wider text-sm mb-1 font-serif group-hover:tracking-widest transition-all duration-300 relative inline-block`}>
                Phone
                <span className={`absolute -bottom-px left-0 w-full h-px bg-${sectionColors[1].accent}/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></span>
              </h4>
              <div className={`h-px w-16 bg-gradient-to-r from-transparent via-${sectionColors[1].accent}/30 to-transparent mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              <p className={`text-${colors.textMedium} font-light group-hover:text-${colors.textDark} transition-colors duration-300`}>{phone}</p>
              {isMounted && (
                <a 
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className={`mt-2 text-${sectionColors[1].accent} hover:text-${colors.vibrant1} text-sm font-medium transition-colors duration-200 inline-flex items-center group-hover:translate-x-1 transform transition-transform`}
                >
                  <span className="relative">
                    Call Now
                    <span className={`absolute -bottom-px left-0 w-full h-px bg-${sectionColors[1].accent}/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></span>
                  </span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
          
          {/* Hours Section */}
          <div 
            className="flex items-start group"
            onMouseEnter={() => setActiveSection(2)} 
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className={`mr-4 flex-shrink-0 p-2 bg-${sectionColors[2].bg} rounded-full relative overflow-hidden transition-all duration-300 group-hover:shadow-md ${activeSection === 2 ? `ring-2 ring-${sectionColors[2].accent}/20` : ''}`}>
              <div className={`absolute inset-0 bg-gradient-to-br from-${sectionColors[2].accent}/10 via-transparent to-${sectionColors[2].accent}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-${sectionColors[2].accent}/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out`}></div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-${sectionColors[2].icon} relative z-10 group-hover:scale-110 transition-transform duration-300`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className={`text-${sectionColors[2].accent} font-medium uppercase tracking-wider text-sm mb-1 font-serif group-hover:tracking-widest transition-all duration-300 relative inline-block`}>
                Hours
                <span className={`absolute -bottom-px left-0 w-full h-px bg-${sectionColors[2].accent}/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></span>
              </h4>
              <div className={`h-px w-16 bg-gradient-to-r from-transparent via-${sectionColors[2].accent}/30 to-transparent mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              <div className={`text-${colors.textMedium} font-light space-y-1 group-hover:text-${colors.textDark} transition-colors duration-300`}>
                <p className="group/item flex items-center">
                  <span className={`inline-block w-1 h-1 rounded-full bg-${sectionColors[2].accent}/50 mr-2 group-hover/item:bg-${sectionColors[2].accent} transition-colors duration-300`}></span>
                  Monday - Thursday: {hours.monday}
                </p>
                <p className="group/item flex items-center">
                  <span className={`inline-block w-1 h-1 rounded-full bg-${sectionColors[2].accent}/50 mr-2 group-hover/item:bg-${sectionColors[2].accent} transition-colors duration-300`}></span>
                  Friday - Saturday: {hours.friday}
                </p>
                <p className="group/item flex items-center">
                  <span className={`inline-block w-1 h-1 rounded-full bg-${sectionColors[2].accent}/50 mr-2 group-hover/item:bg-${sectionColors[2].accent} transition-colors duration-300`}></span>
                  Sunday: {hours.sunday}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section - Only render on client side */}
        {isMounted && showMap && (
          <div className={`border border-${colors.border} overflow-hidden h-64 md:h-auto rounded-sm relative group`}>
            <div className={`absolute inset-0 pointer-events-none border-2 border-${colors.primary}/0 group-hover:border-${colors.primary}/20 transition-colors duration-500 z-10 rounded-sm`}></div>
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${colors.primary}/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out z-10`}></div>
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${colors.primary}/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out z-10`}></div>
            <iframe
              title="Google Maps Location"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBGXKB5QnVuHWaRfz_zhEoJjV5RzGQAWOg&q=${formattedAddress}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:opacity-95 transition-opacity duration-300"
            />
            <div className={`absolute top-2 right-2 bg-${colors.white}/80 backdrop-blur-sm p-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-${colors.primary}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

