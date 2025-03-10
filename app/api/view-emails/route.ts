import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "emails", "emails.txt")

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "No emails have been collected yet" }, { status: 404 })
    }

    // Read the file content
    const fileContent = fs.readFileSync(filePath, "utf8")

    // Parse emails into an array
    const emails = fileContent
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const [email, timestamp] = line.split(" - ")
        return { email, timestamp }
      })

    return NextResponse.json({ emails })
  } catch (error) {
    console.error("Error reading emails:", error)
    return NextResponse.json({ error: "Failed to read emails" }, { status: 500 })
  }
}

