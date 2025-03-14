import Image from 'next/image';
import { Lightbulb, ShieldCheck, Leaf, Users } from 'lucide-react'; // Import modern icons

interface ValueCardProps {
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string }>;
}

const ValueCard = ({ title, description, Icon }: ValueCardProps) => (
    <div className="bg-[#F8CB96] p-6 rounded-2xl shadow-md border border-gray-200 w-full md:w-[700px] flex items-center opacity-100 z-100ß">
        {/* Icon with orange square background */}
        <div className="mr-4 flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#D94E00] rounded-lg">
            <Icon className="w-6 h-6 text-white" /> {/* White icon */}
        </div>

        {/* Content Section */}
        <div>
            <h3 className="text-2xl font-semibold text-[#3a1a0e]">{title}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
        </div>
    </div>
);

const CoreValuesSection = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Left Section with Background Image and Title */}
                    <div className="md:w-1/3 relative px-6 flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] z-0">
                            <Image
                                src="/hiring-bg.png"
                                alt="Core Values Background"
                                width={1200}
                                height={1200}
                                objectFit="contain"
                                
                            />
                        </div>
                        <h2 className="text-6xl md:text-6xl font-bold text-[#3a1a0e] leading-none relative z-10 text-center">
                            Core Values
                        </h2>
                    </div>

                    {/* Right Section (Value Cards) - Right Aligned */}
                    <div className="md:w-2/3 flex flex-col items-end justify-center ml-auto pr-12">
                        <div className="flex flex-col space-y-6 pt-6 pb-6">
                            <ValueCard
                                title="Move with Purpose"
                                description="We solve problems that matter, with speed and intention."
                                Icon={Lightbulb}
                            />
                            <ValueCard
                                title="Built to Last"
                                description="We value smart engineering, strong partnerships, and resilient teams."
                                Icon={ShieldCheck}
                            />
                            <ValueCard
                                title="Green is the Goal"
                                description="Sustainability isn't a checkbox, it's the way forward."
                                Icon={Leaf}
                            />
                            <ValueCard
                                title="Win Together"
                                description="When our drivers, partners, and people grow, so do we."
                                Icon={Users}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValuesSection;
