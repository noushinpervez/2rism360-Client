import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const UpdateTouristSpot = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/my-list";
    const [touristSpot, setTouristSpot] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/tourist-spots/${id}`)
            .then(res => res.json())
            .then(data => {
                setTouristSpot(data);
                setLoading(false);
            })
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;

        const image = form.image.value;
        const tourist_spot_name = form.tourist_spot_name.value;
        const country_name = form.country_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

        const updateSpot = { image, tourist_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear };

        fetch(`https://tourist-spot-server-nu.vercel.app/update-tourist-spots/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Tourist spot data updated successfully.");
                    navigate(from);
                }
            })
    };

    return (
        <section className="lg:px-0 px-3 py-10 bg-background">
            {
                loading ? (
                    <Loading />
                ) : (
                    <form className="container flex flex-col mx-auto space-y-12 text-text font-medium text-base" onSubmit={ handleUpdate }>
                        <fieldset className="grid grid-cols-4 gap-6 lg:p-6 p-3 rounded-md shadow-sm bg-primary-10">
                            <div className="space-y-2 col-span-full lg:col-span-1 text-primary">
                                <p className="text-2xl font-semibold">Update Tourists Spot</p>
                                <p className="opacity-80">Contribute by Sharing Your Favorite Destinations in SouthEast Asia</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="url" className="opacity-80">Image URL</label>
                                    <input id="image" type="text" placeholder="www.imgbb.com" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" defaultValue={ touristSpot.image || "" } />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="name" className="opacity-80">Tourist Spot Name</label>
                                    <input id="tourist_spot_name" type="text" placeholder="Cox's Bazar" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" defaultValue={ touristSpot.tourist_spot_name || "" } />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="name" className="opacity-80">Country Name</label>
                                    <select id="country_name" type="text" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" required>
                                        <option className="bg-background" value="">Please choose a country</option>
                                        <option className="bg-background" value="Bangladesh" selected={ touristSpot.country_name === "Bangladesh" }>Bangladesh</option>
                                        <option className="bg-background" value="Thailand" selected={ touristSpot.country_name === "Thailand" }>Thailand</option>
                                        <option className="bg-background" value="Indonesia" selected={ touristSpot.country_name === "Indonesia" }>Indonesia</option>
                                        <option className="bg-background" value="Malaysia" selected={ touristSpot.country_name === "Malaysia" }>Malaysia</option>
                                        <option className="bg-background" value="Vietnam" selected={ touristSpot.country_name === "Vietnam" }>Vietnam</option>
                                        <option className="bg-background" value="Cambodia" selected={ touristSpot.country_name === "Cambodia" }>Cambodia</option>
                                    </select>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="opacity-80">Location</label>
                                    <input id="location" type="text" placeholder="Chittagong, Bangladesh" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" defaultValue={ touristSpot.location || "" } />
                                </div>
                                <div className="col-span-full lg:text-base text-sm">
                                    <label htmlFor="text" className="opacity-80">Short Description</label>
                                    <textarea id="short_description" placeholder="Your short description here..." className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" defaultValue={ touristSpot.short_description || "" }></textarea>
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="text" className="opacity-80">Average Cost</label>
                                    <input id="average_cost" type="number" placeholder="10000 BDT" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" defaultValue={ touristSpot.average_cost || "" } />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="text" className="opacity-80">Seasonality</label>
                                    <input id="seasonality" type="text" placeholder="Winter" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" defaultValue={ touristSpot.seasonality || "" } />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="text" className="opacity-80">Travel Time</label>
                                    <input id="travel_time" type="number" step="0.01" placeholder="7 days" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" defaultValue={ touristSpot.travel_time || "" } />
                                </div>
                                <div className="col-span-full sm:col-span-2">
                                    <label htmlFor="text" className="opacity-80">Total Visitors Per Year</label>
                                    <input id="totalVisitorsPerYear" type="number" placeholder="10000" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" defaultValue={ touristSpot.totalVisitorsPerYear || "" } />
                                </div>
                                <div className="col-span-full"></div>
                                <div className="lg:col-span-1 col-span-full">
                                    <button type="submit" className="flex w-full items-center justify-center px-4 py-2 text-base font-medium leading-6 text-inverse-text whitespace-no-wrap bg-primary border-2 border-transparent rounded-md shadow-sm hover:bg-transparent hover:text-text hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500">
                                        Update
                                    </button>
                                </div>
                                <div className="lg:col-span-1 col-span-full">
                                    <Link to="/my-list" className="flex w-full items-center justify-center px-4 py-2 text-base font-medium leading-6 text-inverse-text whitespace-no-wrap bg-accent border-2 border-transparent rounded-md shadow-sm hover:bg-transparent hover:text-text hover:border-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-500">
                                        Go Back
                                    </Link>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                )
            }
        </section>
    );
};

export default UpdateTouristSpot;