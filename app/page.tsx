import Image from "next/image"
import CountdownTimer from "@/components/countdown-timer"
import StoreInfo from "@/components/store-info"
import { formatDate } from "@/lib/utils"
import Script from "next/script"

// Define a consistent color palette
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
  vibrant3: "sky-500"
}

export default function ComingSoonPage() {
  // Calculate a date 16 days from now
  const today = new Date()
  const targetDate = new Date(today)
  targetDate.setDate(today.getDate() + 16)

  // Format the target date for display
  const formattedOpeningDate = formatDate(targetDate)
  
  // Format date for structured data
  const isoDate = targetDate.toISOString()

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Ronnie Pizza - Under New Management",
            "description": "Authentic Italian pizza restaurant in West Haven, CT, now under new management with improved recipes and service.",
            "image": "https://www.ronniepizza.com/logo.png",
            "priceRange": "$$",
            "servesCuisine": "Italian, Pizza",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "549 Main St.",
              "addressLocality": "West Haven",
              "addressRegion": "CT",
              "postalCode": "06516",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.2705",
              "longitude": "-72.9469"
            },
            "telephone": "+12035350200",
            "url": "https://www.ronniepizza.com",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "validFrom": isoDate
            },
            "sameAs": [
              "https://www.facebook.com/ronniepizza",
              "https://www.instagram.com/ronniepizza"
            ]
          })
        }}
      />

      <main className={`min-h-screen bg-[url('/bg-texture.png')] bg-cover bg-fixed bg-center bg-${colors.white} text-${colors.textDark} flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden font-sans`}>
        {/* Premium background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Light overlay with texture */}
          <div className={`absolute inset-0 bg-gradient-to-b from-${colors.white}/90 via-${colors.white}/80 to-${colors.white}/95 mix-blend-overlay`}></div>
          
          {/* Gold accents */}
          <div className={`absolute -top-24 -left-24 w-96 h-96 rounded-full bg-${colors.primary} opacity-5 blur-3xl animate-pulse`}></div>
          <div className={`absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-${colors.accent} opacity-5 blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-${colors.primaryLight} opacity-5 blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
          
          {/* Additional colorful elements */}
          <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-${colors.vibrant1} opacity-5 blur-3xl animate-pulse`} style={{ animationDelay: '1.5s' }}></div>
          <div className={`absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-${colors.vibrant2} opacity-5 blur-3xl animate-pulse`} style={{ animationDelay: '2.5s' }}></div>
          <div className={`absolute top-2/3 left-1/4 w-80 h-80 rounded-full bg-${colors.vibrant3} opacity-5 blur-3xl animate-pulse`} style={{ animationDelay: '3s' }}></div>
          
          {/* Decorative elements */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${colors.primaryDark} via-${colors.primary} to-${colors.primaryDark}`}></div>
          <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${colors.primaryDark} via-${colors.primary} to-${colors.primaryDark}`}></div>
          <div className={`absolute top-8 right-8 w-24 h-24 border border-${colors.border} rounded-full`}></div>
          <div className={`absolute bottom-8 left-8 w-24 h-24 border border-${colors.border} rounded-full`}></div>
          
          {/* Colorful decorative shapes */}
          <div className="absolute top-20 left-1/5 hidden lg:block opacity-20 animate-float">
            <div className={`w-12 h-12 rounded-full border-2 border-${colors.vibrant1}/40`}></div>
          </div>
          <div className="absolute bottom-32 right-1/5 hidden lg:block opacity-20 animate-float-delayed">
            <div className={`w-8 h-8 rotate-45 border-2 border-${colors.vibrant2}/40`}></div>
          </div>
          <div className="absolute top-1/2 right-24 hidden lg:block opacity-20 animate-float-slow">
            <div className={`w-16 h-4 rounded-full border-2 border-${colors.vibrant3}/40`}></div>
          </div>
          
          {/* Floating ingredients (hidden on mobile) */}
          <div className="absolute top-1/4 left-1/6 hidden lg:block opacity-20 animate-float">
            <div className={`w-8 h-8 rounded-full border border-${colors.primary}/40`}></div>
          </div>
          <div className="absolute top-2/3 right-1/6 hidden lg:block opacity-20 animate-float-delayed">
            <div className={`w-6 h-6 rounded-full border border-${colors.primary}/40`}></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 hidden lg:block opacity-20 animate-float-slow">
            <div className={`w-10 h-2 rounded-full border border-${colors.primary}/40`}></div>
          </div>
        </div>

        {/* Main content container with improved z-index */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          {/* Logo section with premium animation */}
          <header className="w-full max-w-5xl mx-auto text-center mb-10 sm:mb-12">
            <div className="relative inline-block">
              <div className={`absolute inset-0 bg-gradient-to-r from-${colors.primary}/20 via-${colors.vibrant1}/10 to-${colors.accent}/20 blur-xl rounded-full transform animate-pulse-slow`}></div>
              <div className="relative flex justify-center transform transition-all duration-700 hover:scale-105 hover:drop-shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Ronnie Pizza Logo"
                  width={600}
                  height={300}
                  className="max-w-[350px] sm:max-w-[450px] h-auto drop-shadow-lg"
                  priority
                />
              </div>
            </div>

            <h1 className={`mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-${colors.primaryDark} via-${colors.primary} to-${colors.primaryDark} mb-4 sm:mb-6 tracking-tight drop-shadow-sm uppercase font-serif`}>
              Coming Soon
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className={`h-px w-12 bg-${colors.primary}/50`}></div>
              <div className={`text-${colors.primaryDark} font-medium italic font-serif`}>Authentic Italian Pizza</div>
              <div className={`h-px w-12 bg-${colors.primary}/50`}></div>
            </div>
            
            <div className={`inline-block bg-${colors.white}/80 backdrop-blur-sm px-6 py-3 rounded-sm text-${colors.primaryDark} font-semibold mb-6 border border-${colors.border} shadow-sm tracking-wider uppercase text-sm`}>
              Under New Management
            </div>
          </header>

          <section className="w-full max-w-4xl relative px-4 sm:px-6 grid gap-8 sm:gap-10">
            {/* Main content card with premium styling */}
            <article className={`bg-${colors.white}/90 backdrop-blur-sm rounded-sm shadow-xl overflow-hidden border border-${colors.border} transform transition-all duration-500 hover:shadow-2xl group`}>
              <div className={`absolute inset-0 bg-gradient-to-r from-${colors.primary}/5 via-${colors.vibrant2}/5 to-${colors.accent}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative p-8 sm:p-12">
                <div className="text-center">
                  <div className="inline-block mb-6">
                    <div className={`w-16 h-16 border border-${colors.border} rounded-full flex items-center justify-center relative overflow-hidden group-hover:border-${colors.primary}/50 transition-colors duration-500`}>
                      <div className={`absolute inset-0 bg-gradient-to-br from-${colors.vibrant1}/10 via-transparent to-${colors.vibrant3}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <Image 
                        src="/pizza-icon.svg" 
                        alt="Pizza Icon" 
                        width={32} 
                        height={32}
                        className="opacity-80 relative z-10"
                      />
                    </div>
                  </div>
                  
                  <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${colors.textDark} mb-4 sm:mb-6 font-serif`}>
                    A Fresh Start with New Management
                  </h2>
                  
                  <div className={`w-24 h-px bg-gradient-to-r from-${colors.primary}/30 via-${colors.accent} to-${colors.primary}/30 mx-auto mb-8 rounded-full`}></div>
                  
                  <p className={`text-${colors.textMedium} mb-10 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed`}>
                    We&apos;re excited to announce that Ronnie Pizza is reopening under new management! 
                    We&apos;re bringing you improved recipes, enhanced service, and the same authentic 
                    Italian flavors you love, but with a fresh new approach.
                  </p>

                  <div className={`mb-10 sm:mb-12 bg-${colors.white}/80 backdrop-blur-sm py-6 px-10 inline-block shadow-sm border border-${colors.border} relative overflow-hidden group-hover:border-${colors.primary}/30 transition-colors duration-500`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${colors.vibrant1}/5 via-transparent to-${colors.vibrant3}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <h3 className={`text-lg sm:text-xl font-medium text-${colors.textMedium} mb-2 uppercase tracking-wider relative z-10`}>
                      Grand Reopening
                    </h3>
                    <time dateTime={isoDate} className={`text-${colors.primaryDark} font-bold text-2xl sm:text-3xl font-serif relative z-10`}>{formattedOpeningDate}</time>
                  </div>

                  <div className="mb-10 sm:mb-12">
                    <CountdownTimer targetDate={targetDate.toISOString()} />
                  </div>
                  
                  <div className={`bg-${colors.secondary}/80 backdrop-blur-sm p-6 border border-${colors.border} mb-4 relative overflow-hidden group-hover:border-${colors.primary}/30 transition-colors duration-500`}>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${colors.vibrant2}/5 via-transparent to-${colors.vibrant1}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <h3 className={`text-${colors.primaryDark} font-medium mb-6 uppercase tracking-wider relative z-10`}>The Premium Experience:</h3>
                    <ul className={`text-left text-${colors.textMedium} space-y-4 max-w-md mx-auto relative z-10`}>
                      <li className="flex items-start">
                        <svg className={`h-5 w-5 text-${colors.primary} mr-3 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="font-light">Artisanal recipes crafted with imported Italian ingredients</span>
                      </li>
                      <li className="flex items-start">
                        <svg className={`h-5 w-5 text-${colors.primary} mr-3 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="font-light">Elegant dining atmosphere with sophisticated décor</span>
                      </li>
                      <li className="flex items-start">
                        <svg className={`h-5 w-5 text-${colors.primary} mr-3 mt-0.5 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="font-light">Curated selection of fine wines and craft cocktails</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* Store Information Card with premium styling */}
            <aside className={`bg-${colors.white}/90 backdrop-blur-sm rounded-sm shadow-lg overflow-hidden border border-${colors.border} transform transition-all duration-500 hover:shadow-xl group`}>
              <div className={`absolute inset-0 bg-gradient-to-r from-${colors.primary}/5 via-${colors.vibrant3}/5 to-${colors.accent}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative p-8 sm:p-10">
                <div className="text-center mb-8">
                  <div className="inline-block mb-6">
                    <div className={`w-14 h-14 border border-${colors.border} rounded-full flex items-center justify-center relative overflow-hidden group-hover:border-${colors.primary}/50 transition-colors duration-500`}>
                      <div className={`absolute inset-0 bg-gradient-to-br from-${colors.vibrant3}/10 via-transparent to-${colors.vibrant1}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <Image 
                        src="/location-icon.svg" 
                        alt="Location Icon" 
                        width={28} 
                        height={28}
                        className="opacity-80 relative z-10"
                      />
                    </div>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold text-${colors.textDark} mb-3 font-serif`}>Visit Our Establishment</h3>
                  <div className={`w-16 h-px bg-gradient-to-r from-${colors.primary}/30 via-${colors.accent} to-${colors.primary}/30 mx-auto mb-6 rounded-full`}></div>
                  <p className={`text-${colors.textMedium} max-w-md mx-auto mb-8 font-light`}>
                    Located in the heart of West Haven, our establishment offers an exceptional dining experience with attentive service and a sophisticated ambiance.
                  </p>
                </div>
                <address className={`not-italic text-${colors.textMedium}`}>
                  <StoreInfo address="549 Main St. West Haven CT 06516" phone="1 203 535 02 00" />
                </address>
              </div>
            </aside>
          </section>

          {/* Enhanced footer */}
          <footer className="text-center relative z-10 mt-16 mb-8">
            <div className="mb-6">
              <div className="flex items-center justify-center gap-6">
                <a href="https://www.facebook.com/ronniepizza" aria-label="Facebook" className={`text-${colors.textLight} hover:text-${colors.primaryDark} transition-colors`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ronniepizza" aria-label="Instagram" className={`text-${colors.textLight} hover:text-${colors.primaryDark} transition-colors`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className={`h-px w-24 bg-gradient-to-r from-${colors.primary}/20 via-${colors.accent}/40 to-${colors.primary}/20 mx-auto mb-6`}></div>
            <p className={`font-light text-${colors.textMedium} text-sm tracking-wider`}>© {new Date().getFullYear()} Ronnie Pizza. All rights reserved.</p>
            <p className="mt-2">
              <a 
                href="https://www.ronniepizza.com" 
                className={`text-${colors.primaryDark} hover:text-${colors.primary} transition-colors font-light text-sm tracking-wider`}
              >
                www.ronniepizza.com
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  )
}

