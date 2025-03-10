import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  // Format the date as "Month Day, Year"
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString("en-US", options)
}

/**
 * Formats a time value to ensure it has two digits (adds leading zero if needed)
 * @param value The time value to format
 * @returns A string representation with leading zero if needed
 */
export function formatTimeValue(value: number): string {
  return value < 10 ? `0${value}` : `${value}`
}

