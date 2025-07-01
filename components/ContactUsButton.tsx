"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const ContactUs = ({ className }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<string | null>(null); // State for the status message
    const [statusOpen, setStatusOpen] = useState(false); // State for controlling the success message popup

    // Define the type for formData
    interface FormData {
        "Your Name": string;
        "Your Email": string;
        "Phone Number": string;
        Location: string;
        "Company Name": string;
        Message: string;
    }

    const sendRequest = async (formData: FormData) => {
        try {
            // Send the request asynchronously in the background
            fetch(
                "https://script.google.com/macros/s/AKfycbxVz09LwbN9KXN9q9VlWWMxTrJnsRXRe4P1bmXdZjZUhD7LmLRZ_lqh1on7Yk2g0WJJpg/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                    mode: "no-cors", // Bypass CORS but we won't handle the response
                }
            );

            // Show success message immediately
            setStatus("Your message has been sent successfully! We'll get back to you shortly.");
            setStatusOpen(true); // Open the success message dialog
        } catch (error) {
            console.error("Error:", error);
            setStatus("There was an error sending your message. Please try again later.");
            setStatusOpen(true); // Open the error message dialog
        }
    };

    // Handle form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Collect form data
        const form = e.target as HTMLFormElement;
        const formData: FormData = {
            "Your Name": (form.elements.namedItem('name') as HTMLInputElement).value,
            "Your Email": (form.elements.namedItem('email') as HTMLInputElement).value,
            "Phone Number": (form.elements.namedItem('phone') as HTMLInputElement).value,
            Location: (form.elements.namedItem('location') as HTMLInputElement).value,
            "Company Name": (form.elements.namedItem('company') as HTMLInputElement).value,
            Message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        // Show the success message immediately, without waiting for the response
        sendRequest(formData);
    };

    return (
        <>
            <button
                className={cn(
                    "relative inline-flex items-center justify-center px-8 py-3 m-2 text-xl font-bold text-white bg-[#FF5722] rounded-full",
                    "transition-all duration-200 hover:bg-[#FF7043]",
                    className
                )}
                onClick={() => setIsOpen(true)}
            >
                Contact Us
            </button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden bg-[#FFF3EF] border-none relative">
                    {/* Form Content */}
                    <div className="relative z-10 px-12 py-16 space-y-6">
                        {/* Custom close button */}
                        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            <span className="sr-only">Close</span>
                        </DialogClose>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                                    />
                                </div>
                                <div className="space-y-1">
                                    {/* Replaced the select with a text input for "Location" */}
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                                />
                            </div>

                            <div className="space-y-1">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722] resize-none"
                                ></textarea>
                            </div>

                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="px-16 py-3 text-xl font-semibold text-white bg-[#FF5722] rounded-full hover:bg-[#FF7043] transition-colors duration-200"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Success/Error Message Dialog */}
            <Dialog open={statusOpen} onOpenChange={setStatusOpen}>
                <DialogContent className="max-w-lg p-8 bg-[#FFF3EF] border-none text-center relative">
                    {/* Custom close button */}
                    <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="sr-only">Close</span>
                    </DialogClose>
                    <h2 className="text-xl font-semibold mb-4">{status?.startsWith("Your message") ? "Success!" : "Error"}</h2>
                    <p className="text-lg">{status}</p>
                    <div className="mt-6">
                        <button
                            onClick={() => setStatusOpen(false)}
                            className="px-8 py-2 text-xl font-semibold text-white bg-[#FF5722] rounded-full hover:bg-[#FF7043] transition-colors duration-200"
                        >
                            Close
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ContactUs;
