import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdAttachMoney } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdModeOfTravel } from "react-icons/md";

const AllSpot = () => {
    const [touristSpot, setTouristSpot] = useState([]);

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/tourist-spot`)
            .then(res => res.json())
            .then(data => {
                setTouristSpot(data);
            })
    }, []);

    return (
        <section className="p-6 lg:p-12 bg-background">
            <h3 className="text-2xl text-center mb-6">All Tourists Spots</h3>
            <div className="flex flex-col container justify-center mx-auto gap-6 lg:p-0 px-6 text-text">
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
                            <div className="flex flex-col p-6">
                                <h3 className="mb-2 text-xl">
                                    { touristSpot.tourist_spot_name }
                                </h3>
                                <p className="text-lg mb-1 font-semibold opacity-90">
                                    { touristSpot.location }
                                </p>
                                <div className="flex flex-wrap gap-2 opacity-80">
                                    <div className="flex gap-1 justify-center items-center">
                                        <MdAttachMoney className="text-primary w-4 h-4" />
                                        <p>
                                            { touristSpot.average_cost } BDT
                                        </p>
                                    </div>
                                    <div className="flex gap-1 justify-center items-center">
                                        <IoMdTime className="text-primary w-4 h-4" />
                                        <p>
                                            { touristSpot.travel_time } days
                                        </p>
                                    </div>
                                    <div className="flex gap-1 justify-center items-center">
                                        <MdModeOfTravel className="text-primary w-4 h-4" />
                                        <p>
                                            { touristSpot.totalVisitorsPerYear }
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 pb-6">
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