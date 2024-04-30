import useAuth from "../Hooks/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSpot = () => {
    const { user } = useAuth() || {};

    const handleAddSpot = (e) => {
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
        const email = form.email.value;
        const username = form.username.value;

        const uid = user.uid;

        const newSpot = { image, tourist_spot_name, country_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, email, username, uid };

        fetch("https://tourist-spot-server-nu.vercel.app/add-spot", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast.success("Tourist spot added successfully.");
                }
            })
    };

    return (
        <section className="p-6 lg:p-12 bg-background">
            <form className="container flex flex-col mx-auto space-y-12 text-text font-medium" onSubmit={ handleAddSpot }>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-primary-10">
                    <div className="space-y-2 col-span-full lg:col-span-1 text-primary">
                        <p className="text-2xl font-semibold">Add Tourists Spot</p>
                        <p className="opacity-80">Contribute by Sharing Your Favorite Destinations in SouthEast Asia</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="url" className="opacity-80">Image URL</label>
                            <input id="image" type="text" placeholder="www.imgbb.com" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="opacity-80">Tourist Spot Name</label>
                            <input id="tourist_spot_name" type="text" placeholder="Cox's Bazar" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="opacity-80">Country Name</label>
                            <select id="country_name" type="text" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70">
                                <option className="bg-background" value="">Please choose a country</option>
                                <option className="bg-background" value="bangladesh">Bangladesh</option>
                                <option className="bg-background" value="thailand">Thailand</option>
                                <option className="bg-background" value="indonesia">Indonesia</option>
                                <option className="bg-background" value="malaysia">Malaysia</option>
                                <option className="bg-background" value="vietnam">Vietnam</option>
                                <option className="bg-background" value="cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="opacity-80">Location</label>
                            <input id="location" type="text" placeholder="Chittagong, Bangladesh" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="text" className="opacity-80">Short Description</label>
                            <textarea id="short_description" placeholder="Your short description here..." className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70"></textarea>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="text" className="opacity-80">Average Cost</label>
                            <input id="average_cost" type="number" placeholder="10000 BDT" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="text" className="opacity-80">Seasonality</label>
                            <input id="seasonality" type="text" placeholder="Winter" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="text" className="opacity-80">Travel Time</label>
                            <input id="travel_time" type="number" step="0.01" placeholder="7 days" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="text" className="opacity-80">Total Visitors Per Year</label>
                            <input id="totalVisitorsPerYear" type="number" placeholder="10000" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="email" className="opacity-80">User Email</label>
                            <input id="email" type="email" placeholder="user@gmail.com" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="name" className="opacity-80">Username</label>
                            <input id="username" type="Username" placeholder="Username" className="w-full rounded-md focus:ring-2 focus:ring-opacity-75 focus:ring-primary p-2 border focus:border-primary focus:ring-offset-2 focus:outline-none transition-colors duration-500 bg-primary-70" />
                        </div>
                        <div className="lg:col-span-1 col-span-full">
                            <button type="submit" className="flex w-full items-center justify-center px-4 py-2 text-base font-medium leading-6 text-inverse-text whitespace-no-wrap bg-primary border-2 border-transparent rounded-md shadow-sm hover:bg-transparent hover:text-text hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-500">
                                Add
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddSpot;