"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronDown, ChevronRight, Copy, Search } from "lucide-react"

interface JsonViewerProps {
  data: any
}

export function JsonViewer({ data }: JsonViewerProps) {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set([]))
  const [searchTerm, setSearchTerm] = useState("")

  const togglePath = (path: string) => {
    const newExpandedPaths = new Set(expandedPaths)
    if (newExpandedPaths.has(path)) {
      newExpandedPaths.delete(path)
    } else {
      newExpandedPaths.add(path)
    }
    setExpandedPaths(newExpandedPaths)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2))
  }

  const getPathDisplay = (path: string) => {
    return path === "root" ? "root" : path.split(".").pop()
  }

  const renderValue = (value: any, path: string, depth = 0) => {
    if (value === null) return <span className="text-gray-500">null</span>

    if (Array.isArray(value)) {
      const isExpanded = expandedPaths.has(path)
      const matchesSearch = searchTerm && path.toLowerCase().includes(searchTerm.toLowerCase())

      return (
        <div className={`ml-${depth * 4} ${matchesSearch ? "bg-yellow-100" : ""}`}>
          <div className="flex items-center cursor-pointer" onClick={() => togglePath(path)}>
            {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
            <span className="text-purple-600">[{value.length}]</span>
          </div>

          {isExpanded && (
            <div className="ml-4 border-l-2 pl-2 border-gray-200">
              {value.map((item: any, index: number) => (
                <div key={`${path}.${index}`} className="my-1">
                  <span className="text-gray-500 mr-2">{index}:</span>
                  {renderValue(item, `${path}.${index}`, depth + 1)}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    if (typeof value === "object") {
      const isExpanded = expandedPaths.has(path)
      const matchesSearch = searchTerm && path.toLowerCase().includes(searchTerm.toLowerCase())
      const keys = Object.keys(value)
      const pathName = getPathDisplay(path)

      return (
        <div className={`ml-${depth * 4} ${matchesSearch ? "bg-yellow-100" : ""}`}>
          <div className="flex items-center cursor-pointer" onClick={() => togglePath(path)}>
            {isExpanded ? <ChevronDown className="h-4 w-4 mr-1" /> : <ChevronRight className="h-4 w-4 mr-1" />}
            <span className="text-gray-700 font-medium mr-1">{pathName}:</span>
            <span className="text-purple-600">
              {"{"}
              {keys.length}
              {"}"}
            </span>
          </div>

          {isExpanded && (
            <div className="ml-4 border-l-2 pl-2 border-gray-200">
              {keys.map((key) => (
                <div key={`${path}.${key}`} className="my-1">
                  <span className="text-blue-600 mr-2">"{key}":</span>
                  {renderValue(value[key], `${path}.${key}`, depth + 1)}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    // Primitive values
    const matchesSearch =
      searchTerm &&
      (path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(value).toLowerCase().includes(searchTerm.toLowerCase()))

    if (typeof value === "string") {
      return <span className={`text-green-600 ${matchesSearch ? "bg-yellow-100" : ""}`}>"{value}"</span>
    }

    if (typeof value === "number") {
      return <span className={`text-orange-600 ${matchesSearch ? "bg-yellow-100" : ""}`}>{value}</span>
    }

    if (typeof value === "boolean") {
      return <span className={`text-red-600 ${matchesSearch ? "bg-yellow-100" : ""}`}>{String(value)}</span>
    }

    return <span className={matchesSearch ? "bg-yellow-100" : ""}>{String(value)}</span>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search in JSON..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={copyToClipboard}>
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
      </div>

      <div className="font-mono text-sm overflow-auto max-h-[500px] p-4 bg-white rounded border">
        {renderValue(data, "root")}
      </div>
    </div>
  )
}
