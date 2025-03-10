"use server"

import fs from "fs"
import path from "path"

export async function saveEmail(email: string) {
  try {
    // Validate email format
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return { success: false, message: "Invalid email format" }
    }

    // Create the emails directory in public if it doesn't exist
    const publicDir = path.join(process.cwd(), "public")
    const emailsDir = path.join(publicDir, "emails")

    console.log("Public directory path:", publicDir)
    console.log("Emails directory path:", emailsDir)

    try {
      if (!fs.existsSync(publicDir)) {
        console.log("Public directory doesn't exist, creating it...")
        fs.mkdirSync(publicDir, { recursive: true })
      }

      if (!fs.existsSync(emailsDir)) {
        console.log("Emails directory doesn't exist, creating it...")
        fs.mkdirSync(emailsDir, { recursive: true })
      }
    } catch (dirError) {
      console.error("Error creating directories:", dirError)
      return { 
        success: false, 
        message: "Failed to create directories for email storage",
        error: dirError instanceof Error ? dirError.message : String(dirError)
      }
    }

    // Path to the emails.txt file
    const filePath = path.join(emailsDir, "emails.txt")
    console.log("Email file path:", filePath)

    // Get current timestamp
    const timestamp = new Date().toISOString()

    // Format the entry with timestamp
    const entry = `${email} - ${timestamp}\n`

    try {
      // Append the email to the file
      fs.appendFileSync(filePath, entry)
    } catch (writeError) {
      console.error("Error writing to file:", writeError)
      return { 
        success: false, 
        message: "Failed to write email to file",
        error: writeError instanceof Error ? writeError.message : String(writeError)
      }
    }

    // Verify the file exists after writing
    if (fs.existsSync(filePath)) {
      console.log("Email successfully saved to file")
      console.log("File size:", fs.statSync(filePath).size, "bytes")
      
      return {
        success: true,
        message: "Email saved successfully",
        filePath: "/emails/emails.txt", // Return the public path
      }
    } else {
      console.error("File was not created successfully")
      return { 
        success: false, 
        message: "Failed to save email - file does not exist after write operation" 
      }
    }
  } catch (error) {
    console.error("Error saving email:", error)
    return {
      success: false,
      message: "Failed to save email. Please try again.",
      error: error instanceof Error ? error.message : String(error)
    }
  }
}

