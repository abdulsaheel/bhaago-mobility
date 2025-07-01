"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface FormData {
  fullName: string
  email: string
  phone: string
  position: string
  experience: string
  motivation: string
  availability: string
  resume: File | null
}

export default function HiringFormButton() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    motivation: '',
    availability: '',
    resume: null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create email body with form data
      const emailBody = `
Hi Bhago Team,

I am interested in joining Bhago Mobility. Here are my details:

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Position of Interest: ${formData.position}
Years of Experience: ${formData.experience}
Motivation: ${formData.motivation}
Availability: ${formData.availability}

Best regards,
${formData.fullName}
      `.trim()

      // Create mailto link
      const mailtoLink = `mailto:hiring.bhago@bhagomobility.com?subject=Job Application - ${formData.position} - ${formData.fullName}&body=${encodeURIComponent(emailBody)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Reset form and close modal
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        motivation: '',
        availability: '',
        resume: null
      })
      setIsOpen(false)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="bg-[#FF4102] hover:bg-[#d04a25] text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300">
          Apply Now
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FEE1B2] border-2 border-[#FF4102]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#390303] text-center">
            Join the Bhago Team
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-[#390303] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[#FF4102] rounded-lg focus:ring-2 focus:ring-[#FF4102] focus:border-transparent outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#390303] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[#FF4102] rounded-lg focus:ring-2 focus:ring-[#FF4102] focus:border-transparent outline-none"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[#390303] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[#FF4102] rounded-lg focus:ring-2 focus:ring-[#FF4102] focus:border-transparent outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Position of Interest */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-[#390303] mb-2">
              Position of Interest *
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[#FF4102] rounded-lg focus:ring-2 focus:ring-[#FF4102] focus:border-transparent outline-none"
            >
              <option value="">Select a position</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Operations Manager">Operations Manager</option>
              <option value="Fleet Coordinator">Fleet Coordinator</option>
              <option value="Business Development">Business Development</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Marketing Specialist">Marketing Specialist</option>
              <option value="Customer Success">Customer Success</option>
              <option value="Finance & Accounting">Finance & Accounting</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Years of Experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-[#390303] mb-2">
              Years of Experience *
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[#FF4102] rounded-lg focus:ring-2 focus:ring-[#FF4102] focus:border-transparent outline-none"
            >
              <option value="">Select experience level</option>
              <option value="0-1 years">0-1 years (Entry Level)</option>
              <option value="2-3 years">2-3 years</option>
              <option value="4-6 years">4-6 years</option>
              <option value="7-10 years">7-10 years</option>
              <option value="10+ years">10+ years (Senior Level)</option>
            </select>
          </div>

          {/* Why do you want to join Bhago? */}
          <div>
            <label htmlFor="motivation" className="block text-sm font-medium text-[#390303] mb-2">
              Why do you want to join Bhago? What excites you about our mission? *
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-[#FF4102] rounded-lg focus:ring-2 focus:ring-[#FF4102] focus:border-transparent outline-none resize-vertical"
              placeholder="Tell us what motivates you to be part of the Bhago team..."
            />
          </div>

          {/* Availability */}
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-[#390303] mb-2">
              When can you start? *
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-[#FF4102] rounded-lg focus:ring-2 focus:ring-[#FF4102] focus:border-transparent outline-none"
            >
              <option value="">Select availability</option>
              <option value="Immediately">Immediately</option>
              <option value="Within 2 weeks">Within 2 weeks</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="Within 2 months">Within 2 months</option>
              <option value="More than 2 months">More than 2 months</option>
            </select>
          </div>

          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-[#390303] mb-2">
              Resume (Optional)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="w-full px-4 py-3 border border-[#FF4102] rounded-lg focus:ring-2 focus:ring-[#FF4102] focus:border-transparent outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FF4102] file:text-white hover:file:bg-[#d04a25]"
            />
            <p className="text-xs text-[#390303] opacity-75 mt-1">
              Accepted formats: PDF, DOC, DOCX (Max 10MB)
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 border border-[#FF4102] text-[#FF4102] font-medium rounded-lg hover:bg-[#FF4102] hover:text-white transition-colors duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-[#FF4102] text-white font-medium rounded-lg hover:bg-[#d04a25] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
