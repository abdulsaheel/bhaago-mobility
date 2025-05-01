"use client"

export default function AboutHero() {
  return (
    <div className="relative min-h-[500px] md:h-screen bg-[#FEE1B2] flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Vertical Gap */}
      <div className="h-10 md:h-20" />
      <h1 
        className="text-[2rem] md:text-[8vw] leading-[2.5rem] md:leading-[11vw] text-[#390303] tracking-[-1%] text-center font-bold max-w-[90%] relative md:absolute z-20 mb-8 md:mb-0 md:transform md:-translate-y-[65%]" 
        style={{ fontFamily: 'Georama' }}
      >
        Built to Last,<br />Built for Impact
      </h1>
      <div className="flex justify-between items-end w-full md:block px-0">
        <img
          src="/passenger-partner-nobg.png"
          alt="Overlay Image Left"
          className="w-[45%] max-h-[200px] md:w-auto md:h-auto md:max-w-[60vw] md:max-h-[60vh] object-contain relative md:absolute md:left-0 md:bottom-0 z-30"
        />
        <img
          src="/bhago-van.png"
          alt="Overlay Image Right"
          className="w-[45%] max-h-[200px] md:w-auto md:h-auto md:max-w-[70vw] md:max-h-[70vh] object-contain relative md:absolute md:right-0 md:bottom-0 z-10"
        />
      </div>
    </div>
  );
}
