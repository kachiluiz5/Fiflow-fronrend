"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Eye, Trash2 } from "lucide-react"

const historicalData = [
  {
    id: 1,
    title: "Q4 Financial Report",
    date: "2025-10-31",
    type: "Financial Analysis",
    description: "Quarterly financial performance analysis and metrics",
  },
  {
    id: 2,
    title: "Marketing Campaign Data",
    date: "2025-10-30",
    type: "Marketing Analytics",
    description: "Performance metrics from recent marketing initiatives",
  },
  {
    id: 3,
    title: "Customer Survey Results",
    date: "2025-10-29",
    type: "Customer Feedback",
    description: "Analysis of customer satisfaction survey responses",
  },
  // Add more items as needed
]

export default function DataHistoryPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Data History</h1>
        <p className="text-muted-foreground">
          View and manage your historical data analysis and reports.
        </p>
      </div>

      <div className="grid gap-6">
        {historicalData.map((item) => (
          <Card key={item.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.type}</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-start">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}