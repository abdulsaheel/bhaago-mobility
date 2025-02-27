"use client"

export default function AboutHero() {
  return (
    <div className="relative w-screen h-screen bg-[#FEE1B2] flex flex-col items-center justify-center p-4 overflow-hidden pt-20">
      {/* Vertical Gap */}
      <div className="h-20" />
      <h1 
        className="text-[8vw] leading-[11vw] text-[#390303] tracking-[-1%] pt-30 text-center font-bold max-w-[90%] absolute z-20" 
        style={{ fontFamily: 'Georama', transform: 'translateY(-50%)' }}
      >
        Built to Last,<br />Built for Impact
      </h1>
      <img
        src="/passenger-partner-nobg.png"
        alt="Overlay Image Left"
        className="absolute w-auto h-auto max-w-[60vw] max-h-[60vh] object-cover z-30"
        style={{ left: '0', bottom: '0' }}
      />
      <img
        src="/bhago-van.png"
        alt="Overlay Image Right"
        className="absolute w-auto h-auto max-w-[70vw] max-h-[70vh] object-cover z-10"
        style={{ right: '0', bottom: '0' }}
      />
    </div>
  );
}
