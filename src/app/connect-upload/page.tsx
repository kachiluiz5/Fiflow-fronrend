"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Combobox } from "@/components/ui/combobox"

export default function ConnectUploadPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col">
            <div className="flex flex-col gap-4 p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Connect & Upload</h1>
                  <p className="text-muted-foreground">Add your files or connect cloud storage</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Files</CardTitle>
                    <CardDescription>Upload your files directly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="border-2 border-dashed hover:border-primary/50 transition-colors rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px] group cursor-pointer bg-muted/50"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <input type="file" id="file-upload" className="hidden" multiple />
                      <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg
                          className="w-6 h-6 text-primary"
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
                      <div className="space-y-2 text-center">
                        <Label className="font-medium">Drop files here, or click to browse</Label>
                        <p className="text-sm text-muted-foreground">Supports documents, images, and PDFs up to 10MB</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Connect Storage</CardTitle>
                    <CardDescription>Import from cloud storage</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Combobox
                      options={[
                        { value: "gdrive", label: "Google Drive" },
                        { value: "onedrive", label: "Microsoft OneDrive" },
                        { value: "dropbox", label: "Dropbox" },
                        { value: "box", label: "Box" },
                      ]}
                      placeholder="Select storage provider"
                    />
                    <p className="text-sm text-muted-foreground">
                      Connect your preferred cloud storage to easily import and manage your files
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  )
}