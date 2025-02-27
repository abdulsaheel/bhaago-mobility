"use client";

export default function WinWin() {
    return (
        <section className="relative z-10 container mx-auto px-6 sm:px-8 md:px-16 lg:px-24 p-6 sm:p-8 md:p-10 text-[#4A1D1F] overflow-x-hidden">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-10 md:gap-32">
                <div
                    className="bg-transparent flex-shrink-0 text-4xl sm:text-5xl md:text-[60px] leading-tight md:leading-[65px]"
                    style={{
                        fontFamily: "Georama",
                        fontWeight: 600,
                        letterSpacing: "-1%",
                    }}
                >
                    Win-Win
                </div>
                <div
                    className="text-sm sm:text-base md:text-[15px] leading-relaxed md:leading-[28px]"
                    style={{
                        fontFamily: "AR One Sans",
                        fontWeight: 500,
                        letterSpacing: "-1%",
                    }}
                >
                    At Bhago, we see business as a force for good, by creating micro entrepreneurs, helping enterprises thrive, and driving planet positive solutions.
                </div>
            </div>
        </section>
    );
}