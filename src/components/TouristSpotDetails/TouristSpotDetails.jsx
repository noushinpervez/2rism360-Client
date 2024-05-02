import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TouristSpotDetails = () => {
    const { id } = useParams();
    const [touristSpot, setTouristSpot] = useState({});

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/tourist-spot/${id}`)
            .then(res => res.json())
            .then(data => {
                setTouristSpot(data);
            })
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-text font-medium text-base p-6 lg:p-12 bg-background tracking-wider">
            <div className="rounded-2xl flex items-center justify-center flex-1">
                <img className="object-cover object-center lg:h-0 min-h-full w-full" src={ touristSpot.image } alt="" />
            </div>
            <div className="h-fit flex-1">
                <h3 className="font-bold text-2xl lg:text-4xl text-textColor mb-4 text-justify">{ touristSpot.tourist_spot_name }</h3>
                <p className="text-lg lg:text-xl mb-6"> { touristSpot.location }</p>
                <div className="border border-secondary-80"></div>
                <p className="text-lg lg:text-xl my-4">Average Cost { touristSpot.average_cost } BDT</p>
                <div className="border border-secondary-80 mb-6"></div>
                <div className="overflow-x-auto">
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className="pr-4 py-3 text-textColor font-bold align-top opacity-80">Description</td>
                                <td className="text-textColor/70 py-3 text-justify">{ touristSpot.short_description }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="border border-secondary-80 my-6"></div>
                <div className="overflow-x-auto text-textColor/70">
                    <table className="table-auto">
                        <tbody>
                            <tr>
                                <td className="pr-16 py-2 opacity-80">Country</td>
                                <td className="text-textColor font-semibold">{ touristSpot.country_name }</td>
                            </tr>
                            <tr>
                                <td className="py-2 opacity-80">Seasonality</td>
                                <td className="text-textColor font-semibold">{ touristSpot.seasonality }</td>
                            </tr>
                            <tr>
                                <td className="py-2 opacity-80">Travel Time</td>
                                <td className="text-textColor font-semibold">{ touristSpot.travel_time } days</td>
                            </tr>
                            <tr>
                                <td className="py-2 opacity-80 pr-4">Total Visitors Per Year</td>
                                <td className="text-textColor font-semibold">{ touristSpot.totalVisitorsPerYear }</td>
                            </tr>
                            <tr>
                                <td className="py-2 opacity-80">Added by</td>
                                <td className="text-textColor font-semibold">{ touristSpot.username } ({ touristSpot.email })</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </section>
    );
};

export default TouristSpotDetails;