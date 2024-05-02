import { IoTicketOutline } from "react-icons/io5";
import { PiParachute } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";

const Stats = () => {
    return (
        <section className="bg-background text-text lg:pt-20 pt-10 px-6">
            <h3 className="text-center text-2xl mb-12">Why book 2rism360?</h3>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 justify-between">
                
                <div className="flex flex-col gap-2 text-center items-center relative lg:w-fit">
                    <IoTicketOutline className="w-8 h-8 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-40 h-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="var(--color1)" d="M53.4,-63.3C68.5,-51.1,79.3,-33.5,79.2,-16.6C79,0.3,67.9,16.6,57.5,31.9C47.1,47.3,37.5,61.8,24.5,65.8C11.6,69.8,-4.5,63.3,-21.8,57.9C-39.1,52.5,-57.6,48.2,-65.9,36.6C-74.3,25.1,-72.6,6.3,-68,-10.6C-63.4,-27.5,-55.9,-42.6,-44.1,-55.4C-32.2,-68.2,-16.1,-78.8,1.5,-80.7C19.2,-82.5,38.4,-75.6,53.4,-63.3Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <p className="mt-4 font-bold text-xl z-10">Free cancellation</p>
                    <p className="font-semibold z-10">Stay flexible on your trip.</p>
                </div>

                <div className="flex flex-col gap-2 text-center items-center relative lg:w-fit">
                    <PiParachute className="w-8 h-8 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-40 h-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="var(--color2)" d="M34.8,-49.6C41.7,-35.6,41.6,-21.5,48.5,-5.1C55.5,11.2,69.5,29.7,67,43C64.5,56.3,45.4,64.3,26.7,69.4C8,74.5,-10.4,76.6,-24.7,70.3C-39,64,-49.4,49.3,-53.2,34.6C-57,20,-54.2,5.4,-50.5,-7.7C-46.8,-20.9,-42,-32.7,-33.5,-46.4C-24.9,-60.1,-12.4,-75.7,0.7,-76.6C13.9,-77.5,27.9,-63.6,34.8,-49.6Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <p className="mt-4 font-bold text-xl z-10">300,000+ experiences</p>
                    <p className="font-semibold z-10">Make memories around the world.</p>
                </div>

                <div className="flex flex-col gap-2 text-center items-center relative lg:w-fit">
                    <IoCalendarOutline className="w-8 h-8 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-40 h-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="var(--color3)" d="M49,-64.7C59.1,-49.8,60,-30.3,61.2,-12.4C62.5,5.5,64,21.7,59.5,38.9C55,56.2,44.4,74.4,29.7,78.3C15.1,82.2,-3.6,71.6,-23.1,64.2C-42.7,56.8,-63.2,52.6,-71.6,40.3C-79.9,28,-76.1,7.6,-68.6,-8.1C-61,-23.7,-49.7,-34.7,-37.6,-49.2C-25.6,-63.7,-12.8,-81.8,3.3,-85.7C19.4,-89.7,38.8,-79.5,49,-64.7Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <p className="mt-4 font-bold text-xl z-10">Reserve now, pay later</p>
                    <p className="font-semibold z-10">Book your spot.</p>
                </div>

                <div className="flex flex-col gap-2 text-center items-center relative">
                    <IoStarOutline className="w-8 h-8 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-40 h-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="var(--color4)" d="M46,-55.4C61.4,-42,76.7,-29.1,76.6,-15.6C76.6,-2,61.1,12.2,49,23.6C36.8,35.1,28,43.9,17.3,48C6.6,52.1,-6,51.7,-22.5,50.6C-39,49.5,-59.4,47.8,-64.3,37.8C-69.3,27.9,-58.8,9.7,-51,-4.6C-43.3,-18.9,-38.3,-29.3,-30.2,-43.9C-22.2,-58.6,-11.1,-77.5,2.1,-80C15.4,-82.6,30.7,-68.7,46,-55.4Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <p className="mt-4 font-bold text-xl z-10">Trusted reviews</p>
                    <p className="font-semibold z-10">4.3 stars from 140,000+ Trustpilot reviews.</p>
                </div>

            </div>
            
        </section>
    );
};

export default Stats;