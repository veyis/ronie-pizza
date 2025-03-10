import EmailViewer from "@/components/admin/email-viewer"

export default function EmailsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Email Subscriber Management</h1>
      <EmailViewer />
    </div>
  )
}

