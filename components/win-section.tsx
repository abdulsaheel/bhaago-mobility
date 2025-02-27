"use client";

export default function WinWin() {
    return (
        <section className="relative z-10 container mx-auto px-16 lg:px-24 p-10 text-[#4A1D1F] overflow-x-hidden">
            <div className="flex flex-row items-start justify-between gap-30 md:gap-32">
                <div
                    className="bg-transparent flex-shrink-0"
                    style={{
                        fontFamily: "Georama",
                        fontWeight: 600,
                        fontSize: "60px",
                        lineHeight: "65px",
                        letterSpacing: "-1%",
                    }}
                >
                    Win-Win
                </div>
                <div
                    style={{
                        fontFamily: "AR One Sans",
                        fontWeight: 500,
                        fontSize: "15px",
                        lineHeight: "28px",
                        letterSpacing: "-1%",
                    }}
                >
                    At Bhago, we see business as a force for good, by creating micro entrepreneurs, helping enterprises thrive, and driving planet positive solutions.
                </div>
            </div>
        </section>
    );
}
