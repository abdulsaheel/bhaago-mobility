'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CalendarDays, Award, Lightbulb, Handshake, Battery, Cpu, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  events?: TimelineEvent[];
  className?: string;
}

const defaultEvents: TimelineEvent[] = [
  {
    date: 'August 2019',
    title: 'Bhago Mobility is founded.',
    icon: <Award className="w-6 h-6 text-white" />,
  },
  {
    date: 'June 2020',
    title: 'The company starts research and development (R&D) in battery technology.',
    icon: <Lightbulb className="w-6 h-6 text-white" />,
  },
  {
    date: 'April 2020',
    title: 'Bhago Mobility invests in Saku, a battery technology partner.',
    icon: <Handshake className="w-6 h-6 text-white" />,
  },
  {
    date: 'June 2021',
    title: 'The company invests in Jumbotail, an application partner.',
    icon: <Handshake className="w-6 h-6 text-white" />,
  },
  {
    date: 'September 2022',
    title: 'Bhago Mobility ties up with Honda E-swap, a battery-swapping initiative.',
    icon: <Battery className="w-6 h-6 text-white" />,
  },
  {
    date: 'August 2023',
    title: 'The company builds a system powered by Value.',
    icon: <Cpu className="w-6 h-6 text-white" />,
  },
  {
    date: 'December 2024',
    title: 'The finalization of fleet solutions is completed.',
    icon: <Truck className="w-6 h-6 text-white" />,
  },
];

const EVENTS_PER_PAGE = 4;

export function Timeline({ events = defaultEvents, className }: TimelineProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  
  const currentEvents = events.slice(
    currentPage * EVENTS_PER_PAGE,
    (currentPage + 1) * EVENTS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className={cn('relative w-full mx-auto px-4 py-16', className)}>
      {/* Navigation buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none z-10">
        <button
          onClick={prevPage}
          className="pointer-events-auto transform -translate-x-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#EB8937] to-[#FF4A00] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none"
          style={{ opacity: currentPage === 0 ? 0.5 : 1 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextPage}
          className="pointer-events-auto transform translate-x-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#EB8937] to-[#FF4A00] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 focus:outline-none"
          style={{ opacity: currentPage === totalPages - 1 ? 0.5 : 1 }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Complex curved path */}
      <div className="relative h-[500px] overflow-hidden">
        <svg
          className="absolute left-0 top-1/2 w-full h-40 -translate-y-1/2"
          preserveAspectRatio="none"
          viewBox="0 0 1200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80C100 40 200 120 300 80C400 40 500 120 600 80C700 40 800 120 900 80C1000 40 1100 120 1200 80"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            className="path-animation"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1200" y2="0">
              <stop offset="0%" stopColor="#260404" />
              <stop offset="50%" stopColor="#EB8937" />
              <stop offset="100%" stopColor="#FF4A00" />
            </linearGradient>
          </defs>
        </svg>

        {/* Timeline events */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-between items-center h-full"
          >
            {currentEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={`${currentPage}-${index}`}
                  initial={{ opacity: 0, y: isEven ? -50 : 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={cn(
                    'absolute',
                    'w-[280px]',
                    isEven ? '-translate-y-[140px]' : 'translate-y-[140px]',
                    'left-[calc((100%/4)*' + index + ')]'
                  )}
                >
                  {/* Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full 
                             bg-gradient-to-br from-[#EB8937] to-[#FF4A00] 
                             flex items-center justify-center shadow-xl
                             border-2 border-[#F3C6A5]/20"
                    style={{
                      top: isEven ? '100%' : '-3rem',
                    }}
                  >
                    {event.icon}
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className={cn(
                      'p-6 rounded-2xl',
                      'bg-gradient-to-br from-[#F8E0CC] to-[#F3C6A5]',
                      'shadow-[0_0_30px_rgba(235,137,55,0.1)]',
                      'border border-[#F3C6A5] border-[#EB8937] border-opacity-20'
                    )}
                    initial={{ opacity: 0, y: isEven ? 20 : -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    style={{
                      top: isEven ? '120%' : '10%',
                      left: '-50%',
                      transform: 'translateX(50%)',
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm">{event.date}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
