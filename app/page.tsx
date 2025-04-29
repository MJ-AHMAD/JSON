"use client"

import { useState } from "react"
import { JsonViewer } from "@/components/json-viewer"

// Sample data - you can replace this with your own JSON data
const initialData = {
  root: {
    folder1: {
      subfolder1: {
        "file1.txt": "Content of file 1",
        "file2.txt": "Content of file 2",
      },
      subfolder2: {
        "file3.txt": "Content of file 3",
      },
    },
    folder2: {
      subfolder3: {
        "file4.txt": "Content of file 4",
        "file5.txt": "Content of file 5",
      },
    },
  },
}

export default function Home() {
  const [data, setData] = useState(initialData)

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">JSON Viewer</h1>

      <div className="max-w-6xl mx-auto p-4 border rounded-md bg-muted/30">
        <JsonViewer data={data} />
      </div>
    </main>
  )
}
