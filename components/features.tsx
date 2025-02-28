import Image from "next/image";

export default function Features() {
  const features = [
    { icon: "icon_1.svg", title: "16-Hour EV Uptime", description: "No more charging wait times for your vehicle" },
    { icon: "icon_2.svg", title: "100% Green", description: "For the planet, for today, for progress" },
    { icon: "icon_3.svg", title: "Driverprenuers", description: "Join the fleet, be your own boss" },
    { icon: "icon_4.svg", title: "Strong Partnerships", description: "With giants like Honda and Valeo" },
    { icon: "icon_5.svg", title: "Tech-Led", description: "Real-time analytics, fleet optimization & driver insights" },
    { icon: "icon_6.svg", title: "Scalable", description: "Go anywhere you go" },
  ];

  const centerX = "10%";
  const centerY = "50%";

  return (
    <section className="relative w-screen h-screen bg-[#FF531A] flex items-center justify-center overflow-hidden">
      {/* Mobile View - Stacked Layout */}
      <div className="block md:hidden w-full px-6 py-12 text-white">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 mb-6 overflow-hidden">
            <Image
              src={`/${feature.icon}`}
              alt={feature.title}
              width={40}
              height={40}
              className="object-contain flex-shrink-0"
            />
            <div className="flex-1">
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-sm text-white/80">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Original Layout */}
      <div className="hidden md:flex w-full h-full items-center justify-center">
        <div className="absolute" style={{ left: centerX, top: centerY, transform: "translate(-50%, -50%)" }}>
          <Image src="/bhago_wm.svg" alt="Decorative Small Flower" width={250} height={250} className="object-contain" priority />
        </div>
        <div className="absolute" style={{ left: centerX, top: centerY, transform: "translate(-50%, -50%)" }}>
          <Image src="/landing_top_spin_flower.svg" alt="Decorative Large Flower" width={800} height={800} className="object-contain animate-[spin_20s_linear_infinite]" priority />
        </div>
        <div className="absolute" style={{ left: centerX, top: centerY, transform: "translate(-50%, -50%)" }}>
          <svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="480" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        {features.map((feature, index) => {
          const startAngle = -35;
          const endAngle = 35;
          const step = (endAngle - startAngle) / (features.length - 1);
          const angle = startAngle + index * step;
          const radians = (angle * Math.PI) / 180;
          const radius = 480;
          const x = 500 + radius * Math.cos(radians);
          const y = 500 + radius * Math.sin(radians);

          return (
            <div key={index} className="absolute flex items-center justify-center" style={{ left: `calc(${centerX} + ${x - 500}px)`, top: `calc(${centerY} + ${y - 500}px)`, transform: "translate(-50%, -50%)" }}>
              <div className="flex items-center justify-center z-10 w-16 h-16">
                <Image src={`/${feature.icon}`} alt={feature.title} width={64} height={64} className="object-contain w-full h-full" />
              </div>
              <div className="absolute flex flex-col text-white left-24">
                <h3 className="font-bold text-lg whitespace-nowrap">{feature.title}</h3>
                <p className="text-sm text-white/80 whitespace-nowrap">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}