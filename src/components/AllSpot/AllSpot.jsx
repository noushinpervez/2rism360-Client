import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdModeOfTravel } from "react-icons/md";
import { FaSortNumericDown } from "react-icons/fa";
import { FaSortNumericUp } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";

const AllSpot = () => {
    const [touristSpot, setTouristSpot] = useState([]);
    const [sortBy, setSortBy] = useState(null);

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/tourist-spot`)
            .then(res => res.json())
            .then(data => {
                setTouristSpot(data);
            })
    }, []);

    const handleSort = () => {
        if (sortBy === null) {
            setTouristSpot([...touristSpot.sort((a, b) => a.average_cost - b.average_cost)]);
            setSortBy('asc');
        } else if (sortBy === 'asc') {
            setTouristSpot([...touristSpot.sort((a, b) => b.average_cost - a.average_cost)]);
            setSortBy('desc');
        } else {
            setTouristSpot([...touristSpot.sort((a, b) => a.average_cost - b.average_cost)]);
            setSortBy('asc');
        }
    };

    return (
        <section className="p-6 lg:p-12 bg-background">
            <h3 className="text-2xl text-center mb-6">All Tourists Spots</h3>
            <div className="text-right container mx-auto mb-6">
                <button onClick={ handleSort } className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-text transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-background group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-secondary group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        { sortBy === 'asc' ? <FaSortNumericUp className="w-5 h-5 text-accent" /> : <FaSortNumericDown className="w-5 h-5 text-accent" /> }
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        { sortBy === 'asc' ? <FaSortNumericUp className="w-5 h-5 text-accent" /> : <FaSortNumericDown className="w-5 h-5 text-accent" /> }
                    </span>
                    <p className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white font-bold">Sort by Average Cost</p>
                </button>
            </div>
            <div className="flex flex-col container justify-center mx-auto text-text">
                {
                    touristSpot.map(touristSpot => (
                        <div key={ touristSpot._id } className="mt-6 w-full bg-primary-10 text-base rounded-xl">
                            <div className="h-56">
                                <img
                                    src={ touristSpot.image }
                                    alt={ touristSpot.tourist_spot_name }
                                    className="object-cover object-center h-56 w-full rounded-t-xl"
                                />
                            </div>
                            <div className="flex flex-col lg:p-6 p-3">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="mb-4 text-xl">
                                            { touristSpot.tourist_spot_name }
                                        </h3>
                                    </div>
                                    <div className="text-xs opacity-50 text-right">
                                        <p>
                                            Added by { touristSpot.username }
                                        </p>
                                        <p className="text-xs hidden lg:block">
                                            { touristSpot.email }
                                        </p>
                                    </div>
                                </div>
                                <p className="text-lg mb-1 font-semibold opacity-90">
                                    { touristSpot.location }
                                </p>
                                <div className="flex flex-wrap gap-4 opacity-80 mt-4">
                                    <div className="flex gap-1 justify-center items-center">
                                        <MdAttachMoney className="text-primary w-5 h-5" />
                                        <p className="leading-none">
                                            { touristSpot.average_cost } BDT Avg Cost
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
                                    <div className="flex gap-1 justify-center items-center">
                                        <TiWeatherSunny className="text-primary w-5 h-5" />
                                        <p className="leading-none">
                                            Peak Season { touristSpot.seasonality }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:px-6 px-3 py-6">
                                <Link to={ `/tourist-spot/${touristSpot._id}` } className="flex w-fit items-center justify-center px-4 py-2 text-base font-bold leading-6 text-inverse-text whitespace-no-wrap bg-primary border-2 border-transparent rounded-md shadow-sm hover:bg-transparent hover:text-text hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default AllSpot;