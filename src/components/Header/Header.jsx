import { useEffect, useState } from "react";
import { MobileNav, IconButton, Tooltip } from "@material-tailwind/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Header = () => {
    const { logout, user } = useAuth();

    const getProfileImage = () => {
        return user?.photoURL || "./user.png";
    };

    // toggle theme
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? storedTheme : "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // navbar open
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    // navlinks and styles
    const activeLinkStyle = {
        fontWeight: 800,
        transition: "all 0.5s ease-in-out",
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, var(--secondary-80) 50%)",
    };

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-semibold text-lg">
            <NavLink to="/" className="flex items-center" style={ ({ isActive }) => {
                return isActive ? activeLinkStyle : {};
            } }>
                Home
            </NavLink>
            <NavLink to="/all-spot" className="flex items-center" style={ ({ isActive }) => {
                return isActive ? activeLinkStyle : {};
            } }>
                All Tourists Spot
            </NavLink>
            <NavLink to="add-spot" className="flex items-center" style={ ({ isActive }) => {
                return isActive ? activeLinkStyle : {};
            } }>
                Add Tourists Spot
            </NavLink>
            <NavLink to="my-list" className="flex items-center" style={ ({ isActive }) => {
                return isActive ? activeLinkStyle : {};
            } }>
                MyList
            </NavLink>
        </ul>
    );

    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isHomePage, setIsHomePage] = useState(true);

    useEffect(() => {
        setIsHomePage(location.pathname === '/');
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={ `w-full block fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 text-text ${(scrolled || !isHomePage || openNav) ? 'bg-background sticky' : 'bg-transparent'
            } transition-all duration-500 ease-in-out` }>
            <div className="flex items-center justify-between">
                <Link to="/" className="mr-4 cursor-pointer py-1.5 lg:text-3xl text-2xl">
                    <p className="italic text-text font-semibold">
                        2rism<span style={ { color: 'transparent', WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor: 'var(--text)' } }>360</span>
                    </p>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{ navList }</div>
                    <div className="flex items-center gap-x-1">
                        <button className="inline-flex items-center gap-x-2 py-2 px-3 rounded-full text-sm text-inverse-text" onClick={ handleThemeSwitch } style={ { background: "linear-gradient(120deg, var(--primary), var(--accent))" } }>
                            { theme === "dark" ? (
                                <>
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                    </svg>
                                    Light
                                </>
                            ) : (
                                <>
                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                    </svg>
                                    Dark
                                </>
                            ) }
                        </button>
                    </div>
                    {
                        user ? (
                            <>
                                <Tooltip content={ <div>{ user.displayName }</div> }>
                                    <img alt={ user.displayName } className="w-10 h-10 rounded-full ring-2 ring-offset-1 ring-primary mr-3" src={ getProfileImage() } />
                                </Tooltip>
                                <button className="relative items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group hidden lg:inline-flex text-xl" onClick={ logout }>
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-secondary opacity-[3%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-secondary opacity-100 group-hover:-translate-x-8"></span>
                                    <p className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#eef0f1]">Logout</p>
                                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="relative items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group hidden lg:inline-flex text-xl">
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-secondary opacity-[3%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-secondary opacity-100 group-hover:-translate-x-8"></span>
                                    <p className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#eef0f1]">Login</p>
                                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                                </Link>
                                <Link to="/signup" className="relative items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group hidden lg:inline-flex bg-primary text-inverse-text text-xl">
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-secondary opacity-[3%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-secondary opacity-100 group-hover:-translate-x-8"></span>
                                    <p className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-[#eef0f1]">Signup</p>
                                    <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                                </Link>
                            </>
                        )
                    }
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={ false }
                        onClick={ () => setOpenNav(!openNav) }
                    >
                        { openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={ 2 }
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={ 2 }
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        ) }
                    </IconButton>
                </div>
            </div>
            <MobileNav open={ openNav }>
                { navList }
                <div className="flex items-center gap-x-1 px-2">

                    {
                        user ? (
                            <>
                                <Tooltip content={ <div>{ user.displayName }</div> }>
                                    <img alt={ user.displayName } className="w-10 h-10 rounded-full ring-2 ring-offset-1 ring-primary mr-3" src={ getProfileImage() } />
                                </Tooltip>
                                <button className="flex items-center justify-center px-4 py-2 leading-6 whitespace-no-wrap bg-transparent border-2 border-primary rounded-full shadow-sm hover:bg-secondary focus:outline-none flex-1 transition-all ease-in-out duration-500 text-lg" onClick={ logout }>
                                    <p>Logout</p>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="flex items-center justify-center px-4 py-2 leading-6 whitespace-no-wrap bg-transparent border-2 border-primary rounded-full shadow-sm hover:bg-secondary focus:outline-none flex-1 transition-all ease-in-out duration-500 text-lg">
                                    <p>Login</p>
                                </Link>
                                <Link to="/signup" className="flex items-center justify-center px-4 py-2 leading-6 whitespace-no-wrap border-2 border-primary bg-secondary rounded-full shadow-sm hover:bg-transparent focus:outline-none flex-1 transition-all ease-in-out duration-500 text-lg">
                                    <p>Signup</p>
                                </Link>
                            </>
                        )
                    }

                </div>
            </MobileNav>
        </nav>
    );
};

export default Header;