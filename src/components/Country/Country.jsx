import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { MdAttachMoney } from "react-icons/md";
import { TiWeatherSunny } from "react-icons/ti";
import { TiLocationArrowOutline } from "react-icons/ti";

const Country = () => {
    const { country } = useParams();
    const [countryData, setCountryData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/countries/${country}`)
            .then(res => res.json())
            .then(data => {
                setCountryData(data);
                setLoading(false);
            })
    }, [country]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="py-6 lg:py-12 bg-background">
            {
                loading ? (
                    <Loading />
                ) : (
                    <div>
                        <h3 className="text-2xl text-primary text-center mb-6 tracking-widest lg:px-0 px-6">{ country } Tourist Spots</h3>
                        <div className="bg-primary-10 py-6">
                            <p className="container mx-auto text-center opacity-80 text-primary lg:text-base text-sm lg:px-0 px-6">{ countryData.country.short_description }</p>
                        </div>
                        {
                            countryData.touristSpots.length === 0 ? (
                                <div className="overflow-hidden">
                                    <div className="h-[32.5vh] mt-12 flex items-center justify-center font-semibold text-xl w-full bg-cover bg-center bg-no-repeat text-[#eef0f1] transform transition-transform duration-1000 hover:scale-105 ease-in-out" style={ { backgroundImage: `linear-gradient(to top, rgba(14,22,27,0.4), rgba(14,22,27,0.4)), url(${countryData.country.image})` } }>
                                        No tourist spot found.
                                    </div>
                                </div>
                            ) : (
                                <div className="lg:px-0 px-6">
                                    {
                                        countryData.touristSpots.map(touristSpot => (
                                            <div key={ touristSpot._id } className="mt-12 w-full bg-primary-10 text-base rounded-md container mx-auto">
                                                <div className="h-56 overflow-hidden rounded-t-md">
                                                    <img
                                                        src={ touristSpot.image }
                                                        alt={ touristSpot.tourist_spot_name }
                                                        className="object-cover object-center h-56 w-full rounded-t-md transform transition-transform duration-1000 hover:scale-105 ease-in-out"
                                                    />
                                                </div>
                                                <div className="flex flex-col lg:p-6 p-3">
                                                    <div>
                                                        <h3 className="mb-4 text-xl">
                                                            { touristSpot.tourist_spot_name }
                                                        </h3>
                                                    </div>
                                                    <p className="text-lg mb-1 font-semibold opacity-90">
                                                        { touristSpot.country_name }
                                                    </p>
                                                    <p className="my-1 font-medium text-justify opacity-80 lg:text-base text-sm">
                                                        { touristSpot.short_description }
                                                    </p>
                                                    <div className="flex flex-wrap gap-4 opacity-80 mt-4">
                                                        <div className="flex gap-1 justify-center items-center">
                                                            <TiLocationArrowOutline className="text-primary w-5 h-5" />
                                                            <p className="leading-none">
                                                                { touristSpot.location }
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-1 justify-center items-center">
                                                            <MdAttachMoney className="text-primary w-5 h-5" />
                                                            <p className="leading-none">
                                                                { touristSpot.average_cost } BDT Avg Cost
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
                                                <div className="lg:px-6 px-3 lg:pb-6 py-3">
                                                    <Link to={ `/tourist-spots/${touristSpot._id}` } className="flex w-fit items-center justify-center px-4 py-2 text-base font-bold leading-6 text-inverse-text whitespace-no-wrap bg-primary border-2 border-transparent rounded-md shadow-sm hover:bg-transparent hover:text-text hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500">
                                                        View Details
                                                    </Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ) }
                    </div>
                )
            }
        </section>
    );
};

export default Country;