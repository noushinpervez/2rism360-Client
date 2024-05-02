import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/countries`)
            .then(res => res.json())
            .then(data => {
                setCountry(data);
            })
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="lg:py-20 py-10 bg-background">
            <h3 className="text-2xl text-center mb-12 tracking-widest text-primary">Countries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 lg:p-0 p-6">
                {
                    country.map(country => (
                        <Link key={ country._id } className="relative overflow-hidden rounded-md" to={ `/countries/${country.country_name}` }>
                            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <div className="bg-secondary opacity-70 text-center p-2 w-full z-10">
                                    <p className="text-xl text-text font-bold tracking-widest">{ country.country_name }</p>
                                </div>
                            </div>
                            <img src={ country.image } alt={ country.country_name } className="w-full h-auto rounded-md transform transition-transform duration-1000 hover:scale-105 ease-in-out" />
                        </Link>
                    ))
                }
            </div>
        </section>
    );
};

export default Countries;