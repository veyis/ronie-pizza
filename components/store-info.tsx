import Link from "next/link"

interface StoreInfoProps {
  address: string
  phone: string
}

export default function StoreInfo({ address, phone }: StoreInfoProps) {
  // Format phone number for display
  const formatPhoneDisplay = (phoneNumber: string) => {
    // Remove any non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, "")

    // Format based on length
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`
    } else if (cleaned.length === 11 && cleaned[0] === "1") {
      return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
    }

    // If it doesn't match expected formats, return the original
    return phoneNumber
  }

  // Format phone number for href (tel:)
  const formatPhoneHref = (phoneNumber: string) => {
    return phoneNumber.replace(/\D/g, "")
  }

  const displayPhone = formatPhoneDisplay(phone)
  const hrefPhone = formatPhoneHref(phone)

  return (
    <div className="text-center">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">Visit Us Soon</h3>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-600"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <address className="text-gray-700 not-italic text-sm sm:text-base">{address}</address>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <Link
            href={`tel:${hrefPhone}`}
            className="text-gray-700 hover:text-green-600 transition-colors text-sm sm:text-base"
          >
            {displayPhone}
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <Link
          href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-red-600 hover:text-red-700 transition-colors"
        >
          <span>View on Google Maps</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

