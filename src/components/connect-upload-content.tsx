"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function ConnectUploadContent() {
  return (
    <div className="flex flex-col gap-4 p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Connect & Upload</h1>
          <p className="text-muted-foreground">Add your files or connect cloud storage</p>
        </div>
      </div>

      <Card className="w-full">
        <CardContent className="p-6">
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="upload">Upload Files</TabsTrigger>
              <TabsTrigger value="connect">Connect Cloud Storage</TabsTrigger>
            </TabsList>
            <TabsContent value="upload">
              <div className="border-2 border-dashed rounded-lg p-12 text-center flex flex-col items-center justify-center">
                <div className="mx-auto w-16 h-16 mb-4">
                  <svg
                    className="w-full h-full text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <div className="space-y-2">
                  <Label>Drag and drop files here, or click to browse</Label>
                  <p className="text-sm text-gray-500">Support for documents, images, and PDFs</p>
                </div>
                <Button variant="outline" className="mt-4">Browse Files</Button>
              </div>
            </TabsContent>
            <TabsContent value="connect">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                  <svg className="w-8 h-8" viewBox="0 0 87 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 34.5L0 52l17.5 17.5h52.5L87.5 52 70 34.5H17.5z" fill="#EA4335"/>
                    <path d="M70 34.5H17.5L0 52l17.5 17.5h52.5L87.5 52 70 34.5z" fill="#FBBC05"/>
                    <path d="M70 17H17.5L0 34.5l17.5 17.5h52.5l17.5-17.5L70 17z" fill="#34A853"/>
                    <path d="M70 0H17.5L0 17.5 17.5 35h52.5L87.5 17.5 70 0z" fill="#4285F4"/>
                  </svg>
                  <span>Google Drive</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center space-y-2">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2h8l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" fill="#28A8EA"/>
                    <path d="M14 2v6h6" fill="#0078D4"/>
                  </svg>
                  <span>Microsoft OneDrive</span>
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-4">
                Connect your cloud storage to easily import and manage your files
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}