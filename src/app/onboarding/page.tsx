"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { useState } from "react"

const businessTypes = [
  { id: "startup", label: "Startup", description: "New and growing business" },
  { id: "enterprise", label: "Enterprise", description: "Large established company" },
  { id: "agency", label: "Agency", description: "Service provider or consultancy" },
  { id: "freelancer", label: "Freelancer", description: "Independent professional" },
]

const teamSizes = [
  { id: "1", label: "Just me" },
  { id: "2-10", label: "2-10 people" },
  { id: "11-50", label: "11-50 people" },
  { id: "50+", label: "50+ people" },
]

const useCases = [
  { id: "document-management", label: "Document Management" },
  { id: "team-collaboration", label: "Team Collaboration" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "file-sharing", label: "File Sharing" },
]

const industries = [
  { id: "technology", label: "Technology" },
  { id: "finance", label: "Finance" },
  { id: "healthcare", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "retail", label: "Retail" },
  { id: "other", label: "Other" },
]

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessType: "",
    teamSize: "",
    useCase: "",
    industry: "",
  })

  const updateFormData = (field: keyof typeof formData, value: string) => {
    setFormData((prev: typeof formData) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Tell us about yourself</CardTitle>
          <CardDescription>Step {step} of 4</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <Label>What type of business are you?</Label>
              <RadioGroup
                value={formData.businessType}
                onValueChange={(value: string) => updateFormData("businessType", value)}
                className="grid grid-cols-1 gap-4"
              >
                {businessTypes.map(type => (
                  <Label
                    key={type.id}
                    htmlFor={type.id}
                    className={cn(
                      "flex flex-col space-y-1 rounded-md border p-4 cursor-pointer hover:border-primary",
                      formData.businessType === type.id && "border-primary"
                    )}
                  >
                    <RadioGroupItem value={type.id} id={type.id} className="sr-only" />
                    <span className="font-semibold">{type.label}</span>
                    <span className="text-sm text-muted-foreground">{type.description}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label>How big is your team?</Label>
              <RadioGroup
                value={formData.teamSize}
                onValueChange={(value: string) => updateFormData("teamSize", value)}
                className="grid grid-cols-2 gap-4"
              >
                {teamSizes.map(size => (
                  <Label
                    key={size.id}
                    htmlFor={size.id}
                    className={cn(
                      "flex items-center justify-center rounded-md border p-4 cursor-pointer hover:border-primary",
                      formData.teamSize === size.id && "border-primary"
                    )}
                  >
                    <RadioGroupItem value={size.id} id={size.id} className="sr-only" />
                    {size.label}
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <Label>What&apos;s your primary use case?</Label>
              <RadioGroup
                value={formData.useCase}
                onValueChange={(value: string) => updateFormData("useCase", value)}
                className="grid grid-cols-2 gap-4"
              >
                {useCases.map(useCase => (
                  <Label
                    key={useCase.id}
                    htmlFor={useCase.id}
                    className={cn(
                      "flex items-center justify-center rounded-md border p-4 cursor-pointer hover:border-primary",
                      formData.useCase === useCase.id && "border-primary"
                    )}
                  >
                    <RadioGroupItem value={useCase.id} id={useCase.id} className="sr-only" />
                    {useCase.label}
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <Label>What industry are you in?</Label>
              <RadioGroup
                value={formData.industry}
                onValueChange={(value: string) => updateFormData("industry", value)}
                className="grid grid-cols-2 gap-4"
              >
                {industries.map(industry => (
                  <Label
                    key={industry.id}
                    htmlFor={industry.id}
                    className={cn(
                      "flex items-center justify-center rounded-md border p-4 cursor-pointer hover:border-primary",
                      formData.industry === industry.id && "border-primary"
                    )}
                  >
                    <RadioGroupItem value={industry.id} id={industry.id} className="sr-only" />
                    {industry.label}
                  </Label>
                ))}
              </RadioGroup>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={step === 1}>
            Previous
          </Button>
          <Button onClick={step === 4 ? () => console.log(formData) : nextStep}>
            {step === 4 ? "Complete" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}