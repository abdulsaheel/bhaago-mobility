"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Gamechangers() {
  const animationsEnabled = true
  const { ref, inView } = useInView({
    threshold: 0.2,  // Trigger when 20% of section is visible
    triggerOnce: true // Only play once per page load
  })

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      rotateY: -50
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.5,
        delay: animationsEnabled ? index * 0.2 : 0
      }
    })
  }

  return (
    <div ref={ref} className="w-full min-h-screen bg-white p-4 md:p-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 relative text-[#390303]">
            Gamechangers
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Creating\n**Driverpreneurs**:",
              bg: "#FF5C00",
              imageUrl: "/gamechangers/driverpreneur.png",
              description: "Bhago turns drivers to entrepreneurs through simplified vehicle ownership. By removing barriers such as low credit scores, lack of formal education & upfront capital deposit. With a potential to earn more than double the minimum wage."
            },
            {
              title: "**Industry** Leading\nUptime:",
              bg: "#FF8332",
              imageUrl: "/gamechangers/battery-swap.png",
              description: "Most electric vehicles spend half their life asleep, waiting to recharge. Bhago EVs don't have that luxury. They swap batteries like an F1 pit stop and get right back to work. Upto 16 hours a day, every day. No downtime, no excuses - just relentless movement.\nPowered by Honda Battery E-Swap"
            },
            {
              title: "**Sun-Powered** \nHubs:",
              bg: "#FF5732",
              imageUrl: "/gamechangers/sun-powered.png",
              description: "Bhago charges straight from the sun -100% green, no fossil fuels, no guilt. Our hubs do more than power vehicles; they support drivers with rest areas, food, maintenance, and smooth in-and-out access. Because off-roadtimematters too"
            },
            {
              title: "**Tech-Led**:",
              bg: "#905B42",
              imageUrl: "/gamechangers/tech-led.png",
              description: "Smart fleets need smart systems. Our in-house tech optimizes for fleet efficiency and tracks real-time performance, so our driverpreneurs get the ratings they deserve. Better ratings, higher earnings, and a thriving ecosystem where hustle gets rewarded."
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Trigger only when section is in view
              className={`rounded-3xl overflow-hidden flex flex-col justify-between h-full`}
              style={{ backgroundColor: card.bg }}
            >
              <div className="relative h-66 md:h-64">
                <Image 
                  src={card.imageUrl} 
                  height={300}
                  width={310}
                  alt={`Illustration for ${card.title}`}
                />
              </div>
              <div className="mt-4 flex flex-col flex-grow p-6">
                <div className="min-h-[120px] flex items-start">
                  <h2 className="text-white text-2xl md:text-3xl leading-tight whitespace-pre-line">
                    {card.title.split('**').map((part, i) => 
                      i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                    )}
                  </h2>
                </div>
                <p className="text-white mt-4 text-sm leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
