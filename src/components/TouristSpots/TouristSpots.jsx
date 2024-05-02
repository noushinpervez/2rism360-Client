import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdModeOfTravel } from "react-icons/md";

const TouristSpots = () => {
    const [touristSpot, setTouristSpot] = useState([]);

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/tourist-spots`)
            .then(res => res.json())
            .then(data => {
                setTouristSpot(data);
            })
    }, []);

    const [touristSpotLength, setTouristSpotLength] = useState(6);

    return (
        <section className="lg:py-20 py-10 bg-background">
            <h3 className="text-2xl text-center mb-6 tracking-widest text-primary">Tourists Spots</h3>
            <div className="flex flex-wrap container justify-center mx-auto lg:gap-x-6 lg:px-0 px-6 text-text">
                {
                    touristSpot.slice(0, touristSpotLength).map(touristSpot => (
                        <div key={ touristSpot._id } className="mt-6 w-[423px] bg-primary-10 text-base rounded-md">
                            <div className="h-56 overflow-hidden rounded-t-md">
                                <img
                                    src={ touristSpot.image }
                                    alt={ touristSpot.tourist_spot_name }
                                    className="object-cover object-center h-56 w-full rounded-t-md transform transition-transform duration-1000 hover:scale-105 ease-in-out"
                                />
                            </div>
                            <div className="flex flex-col lg:p-6 p-3">
                                <h3 className="mb-4 text-xl tracking-wider">
                                    { touristSpot.tourist_spot_name }
                                </h3>
                                <p className="text-lg mb-4 font-semibold opacity-90">
                                    { touristSpot.location }
                                </p>
                                <div className="flex flex-wrap gap-4 opacity-80">
                                    <div className="flex gap-1 justify-center items-center">
                                        <MdAttachMoney className="text-primary w-5 h-5" />
                                        <p className="leading-none">
                                            { touristSpot.average_cost } BDT Average Cost
                                        </p>
                                    </div>
                                    <div className="flex gap-1 justify-center items-center">
                                        <IoMdTime className="text-primary w-5 h-5" />
                                        <p className="leading-none">
                                            { touristSpot.travel_time } days of Travel Time
                                        </p>
                                    </div>
                                    <div className="flex gap-1 justify-center items-center">
                                        <MdModeOfTravel className="text-primary w-5 h-5" />
                                        <p className="leading-none">
                                            { touristSpot.totalVisitorsPerYear } Visitors Per Year
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:px-6 px-3 lg:pb-6 py-3">
                                <Link to={ `/tourist-spots/${touristSpot._id}` } className="flex w-full items-center justify-center px-4 py-2 text-base font-bold leading-6 text-inverse-text whitespace-no-wrap bg-primary border-2 border-transparent rounded-md shadow-sm hover:bg-transparent hover:text-text hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={ `${touristSpotLength === touristSpot.length || touristSpot.length < 6 ? "hidden" : "flex justify-center"}` }>
                <button className="flex items-center justify-center px-4 py-2 text-base font-bold leading-6 text-inverse-text whitespace-no-wrap bg-accent border-2 border-transparent rounded-md shadow-sm hover:bg-transparent hover:text-text hover:border-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-500 mt-6" onClick={ () => setTouristSpotLength(touristSpot.length) }>
                    Show All
                </button>
            </div>
        </section>
    );
};

export default TouristSpots;