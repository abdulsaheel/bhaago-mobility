import Image from "next/image";

export default function Features() {
  // Feature data array with title and description
  const features = [
    {
      icon: "icon_1.svg",
      title: "16-Hour EV Uptime",
      description: "No more charging wait times for your vehicle",
    },
    {
      icon: "icon_2.svg",
      title: "100% Green",
      description: "For the planet, for today, for progress",
    },
    {
      icon: "icon_3.svg",
      title: "Driverprenuers",
      description: "Join the fleet, be your own boss",
    },
    {
      icon: "icon_4.svg",
      title: "Strong Partnerships",
      description: "With giants like Tesla and more",
    },
    {
      icon: "icon_5.svg",
      title: "Tech-Led",
      description: "Real-time analytics, fleet optimization & driver insights",
    },
    {
      icon: "icon_6.svg",
      title: "Scalable",
      description: "Go anywhere you go",
    },
  ];

  return (
    <section className="relative w-screen h-screen bg-[#FF531A] flex items-center justify-center overflow-hidden overflow-x-hidden ">
      {/* Large Flower */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 -translate-x-[45%] flex items-center">
        <Image
          src="/landing top spin flower.svg"
          alt="Decorative Large Flower Pattern"
          width={800}
          height={800}
          className="object-contain animate-[spin_20s_linear_infinite]"
          priority
        />
      </div>

      {/* Small Flower */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 -translate-x-[42%] flex items-center">
        <Image
          src="/bhago_wm.svg"
          alt="Decorative Small Flower Pattern"
          width={500}
          height={500}
          className="object-contain scale-50"
          priority
        />
      </div>

      {/* Container for the circular features */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 -translate-x-[45%] w-[960px] h-[960px]">
        {/* Base Circle */}
        <svg
          width="960"
          height="960"
          viewBox="0 0 960 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0"
        >
          <circle cx="480" cy="480" r="450" stroke="white" strokeWidth="1" />
        </svg>

        {/* Feature Points positioned along the right side of the circle */}
        {features.map((feature, index) => {
          // Reduced angular range for closer spacing: -40° to 40°
          const startAngle = -35; // Start at the top-right
          const endAngle = 35; // End at the bottom-right
          const step = (endAngle - startAngle) / (features.length - 1);
          const angle = startAngle + index * step;
          const radians = (angle * Math.PI) / 180;

          // Position using a radius just inside the circle's border
          const radius = 450; // Adjusted to match the circle's radius
          const x = 480 + radius * Math.cos(radians); // Use cos for x
          const y = 480 + radius * Math.sin(radians); // Use sin for y

          return (
            <div
              key={index}
              className="absolute flex items-center justify-center"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Feature icon without white background */}
              <div className="flex items-center justify-center z-10 w-16 h-16">
                <Image
                  src={`/${feature.icon}`}
                  alt={feature.title}
                  width={64} // Increased icon size
                  height={64} // Increased icon size
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Feature text - positioned to the left of the icon */}
              <div
                className={`absolute flex flex-col text-white left-24`} // Removed max-width
              >
                <h3 className="font-bold text-lg whitespace-nowrap">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/80 whitespace-nowrap"> {/* Prevent text wrapping */}
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}