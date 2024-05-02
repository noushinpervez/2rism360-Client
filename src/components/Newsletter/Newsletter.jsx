import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const Newsletter = () => {
    const { user } = useAuth();
    const [isSubscribed, setIsSubscribed] = useState(() => {
        return JSON.parse(localStorage.getItem("isSubscribed")) || false;
    });

    useEffect(() => {
        localStorage.setItem("isSubscribed", JSON.stringify(isSubscribed));
    }, [isSubscribed]);

    const handleSignupClick = () => {
        if (user) {
            setIsSubscribed(true);
            toast.success("You have successfully subscribed to the newsletter!");
        }
    };

    return (
        <section className="lg:pb-20 pb-10 bg-background">
            <div style={ {
                backgroundImage: `linear-gradient(to top, rgba(14,22,27,0.4), rgba(14,22,27,0.4)), url("https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '512px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            } }>
                <div className="flex flex-col container items-start gap-4 text-xl lg:p-0 p-6">
                    <h3 className="text-3xl">Newsletter</h3>
                    <p className="lg:w-1/3 mb-6 font-semibold">Receive inspiring stories and news from SouthEast Asia via email.</p>
                    {
                        user ? (
                            isSubscribed ?
                                (
                                    <p className="font-semibold">You have successfully subscribed to the newsletter!</p>
                                ) :
                                (
                                    <button onClick={ handleSignupClick } className="relative items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group inline-flex text-xl uppercase">
                                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-secondary opacity-[3%]"></span>
                                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-secondary opacity-100 group-hover:-translate-x-8"></span>
                                        <p className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#eef0f1]">Sign up here</p>
                                        <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                                    </button>
                                )
                        ) : (
                            <Link to="/login" className="relative items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group inline-flex text-xl uppercase">
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-secondary opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-secondary opacity-100 group-hover:-translate-x-8"></span>
                                <p className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#eef0f1]">Sign up here</p>
                                <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                            </Link>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Newsletter;