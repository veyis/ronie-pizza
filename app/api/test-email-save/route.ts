import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Test writing to the public directory
    const publicDir = path.join(process.cwd(), "public")
    const emailsDir = path.join(publicDir, "emails")
    const testFilePath = path.join(emailsDir, "test-email-save.txt")

    // Create directories if they don't exist
    if (!fs.existsSync(emailsDir)) {
      fs.mkdirSync(emailsDir, { recursive: true })
    }

    // Write a test file
    const testContent = `Test email save at ${new Date().toISOString()}\n`
    fs.writeFileSync(testFilePath, testContent)

    // Check if file was created
    const fileExists = fs.existsSync(testFilePath)
    const fileSize = fileExists ? fs.statSync(testFilePath).size : 0

    // Get the list of files in the emails directory
    const files = fs.existsSync(emailsDir) ? fs.readdirSync(emailsDir) : []

    return NextResponse.json({
      success: fileExists,
      message: fileExists ? "Test file created successfully" : "Failed to create test file",
      publicDirExists: fs.existsSync(publicDir),
      emailsDirExists: fs.existsSync(emailsDir),
      testFilePath,
      fileSize,
      files,
      publicUrl: "/emails/test-email-save.txt",
    })
  } catch (error) {
    console.error("Error in test email save:", error)
    return NextResponse.json(
      {
        error: "Failed to test email save",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

