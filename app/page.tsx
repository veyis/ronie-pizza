import Image from "next/image"
import CountdownTimer from "@/components/countdown-timer"
import StoreInfo from "@/components/store-info"
import { formatDate } from "@/lib/utils"
import Script from "next/script"

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

      <main className="min-h-screen bg-[url('/bg-texture.png')] bg-cover bg-fixed bg-center bg-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-red-50/90"></div>
          
          {/* Animated background elements */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-red-500 opacity-5 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-green-500 opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-yellow-500 opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Pizza-themed decorative elements */}
          <div className="absolute top-20 right-20 transform rotate-45 opacity-10 hidden md:block">
            <div className="w-16 h-16 bg-red-400 rounded-tr-full"></div>
          </div>
          <div className="absolute bottom-20 left-20 transform -rotate-45 opacity-10 hidden md:block">
            <div className="w-16 h-16 bg-red-400 rounded-tr-full"></div>
          </div>
          
          {/* Floating ingredients (hidden on mobile) */}
          <div className="absolute top-1/4 left-1/6 hidden lg:block opacity-20 animate-float">
            <div className="w-8 h-8 rounded-full bg-green-700"></div>
          </div>
          <div className="absolute top-2/3 right-1/6 hidden lg:block opacity-20 animate-float-delayed">
            <div className="w-6 h-6 rounded-full bg-red-700"></div>
          </div>
          <div className="absolute bottom-1/4 left-1/3 hidden lg:block opacity-20 animate-float-slow">
            <div className="w-10 h-2 rounded-full bg-yellow-700"></div>
          </div>
        </div>

        {/* Main content container with improved z-index */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          {/* Logo section with enhanced animation */}
          <header className="w-full max-w-5xl mx-auto text-center mb-10 sm:mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20 blur-xl rounded-full transform animate-pulse-slow"></div>
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

            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-red-600 to-red-800 mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
              COMING SOON
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-red-300"></div>
              <div className="text-red-600 font-medium italic">Authentic Italian Pizza</div>
              <div className="h-px w-12 bg-red-300"></div>
            </div>
            
            <div className="inline-block bg-red-50 px-4 py-2 rounded-full text-red-700 font-semibold mb-6 border border-red-100 shadow-sm">
              Under New Management
            </div>
          </header>

          <section className="w-full max-w-4xl relative px-4 sm:px-6 grid gap-8 sm:gap-10">
            {/* Main content card with premium styling */}
            <article className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-500 hover:shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 sm:p-10">
                <div className="text-center">
                  <div className="inline-block mb-4">
                    <Image 
                      src="/pizza-icon.svg" 
                      alt="Pizza Icon" 
                      width={48} 
                      height={48}
                      className="opacity-80"
                    />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                    A Fresh Start with New Management
                  </h2>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6 rounded-full"></div>
                  
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                    We&apos;re excited to announce that Ronnie Pizza is reopening under new management! 
                    We&apos;re bringing you improved recipes, enhanced service, and the same authentic 
                    Italian flavors you love, but with a fresh new approach.
                  </p>

                  <div className="mb-8 sm:mb-10 bg-gradient-to-r from-red-50 to-red-100 py-5 px-8 rounded-2xl inline-block shadow-sm border border-red-100">
                    <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-1">
                      Grand Reopening
                    </h3>
                    <time dateTime={isoDate} className="text-red-600 font-bold text-xl sm:text-2xl">{formattedOpeningDate}</time>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <CountdownTimer targetDate={targetDate.toISOString()} />
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-xl border border-green-100 mb-4">
                    <h3 className="text-green-800 font-medium mb-2">What&apos;s New:</h3>
                    <ul className="text-left text-green-700 space-y-2 max-w-md mx-auto">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Improved authentic recipes with premium ingredients</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>Enhanced dining experience with renovated interior</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>New specialty pizzas and expanded menu options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            {/* Store Information Card with premium styling */}
            <aside className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-500 hover:shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="inline-block mb-4">
                    <Image 
                      src="/location-icon.svg" 
                      alt="Location Icon" 
                      width={40} 
                      height={40}
                      className="opacity-80"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Visit Us Soon</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mb-4 rounded-full"></div>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    We&apos;re located in the heart of West Haven. Our new management team can&apos;t wait to welcome you and provide an exceptional dining experience!
                  </p>
                </div>
                <address className="not-italic">
                  <StoreInfo address="549 Main St. West Haven CT 06516" phone="1 203 535 02 00" />
                </address>
              </div>
            </aside>
          </section>

          {/* Enhanced footer */}
          <footer className="text-center relative z-10 mt-10 mb-8">
            <div className="mb-4">
              <div className="flex items-center justify-center gap-4">
                <a href="https://www.facebook.com/ronniepizza" aria-label="Facebook" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ronniepizza" aria-label="Instagram" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
            <p className="font-medium text-gray-600">© {new Date().getFullYear()} Ronnie Pizza. All rights reserved.</p>
            <p className="mt-2">
              <a 
                href="https://www.ronniepizza.com" 
                className="text-red-600 hover:text-red-700 transition-colors font-medium hover:underline"
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

