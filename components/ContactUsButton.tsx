"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ContactUs = ({ className }: { className?: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Contact Us Button */}
            <button
                className={cn(
                    // We replaced shadow-lg with a custom box shadow for a glowing "beam" effect:
                    "relative inline-flex items-center justify-center px-8 py-3 m-2 text-xl font-bold text-white bg-[#FF5722] rounded-full " +
                    "shadow-[0_0_10px_rgba(255,87,34,0.5)] hover:shadow-[0_0_15px_rgba(255,87,34,0.7)] " +
                    "transition-shadow duration-200",
                    className
                )}
                onClick={() => setIsOpen(true)}
            >
                Contact Us
            </button>

            {/* Modal */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-lg p-6 bg-[#FBE9E7] rounded-xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#D84315]">Contact Us</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="p-2 border rounded-md" />
                            <input type="email" placeholder="Your Email" className="p-2 border rounded-md" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Phone Number" className="p-2 border rounded-md" />
                            <select className="p-2 border rounded-md">
                                <option>Location</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Company Name" className="w-full p-2 border rounded-md" />
                        <textarea placeholder="Message" className="w-full p-2 border rounded-md" rows={3}></textarea>
                        <button
                            type="submit"
                            className="w-full py-2 text-white bg-[#FF5722] rounded-md hover:bg-[#E64A19]"
                        >
                            Submit
                        </button>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default ContactUs;
