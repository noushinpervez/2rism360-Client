import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = `2rism360 | HOME`;
        }
        else {
            document.title = `2rism360 ${location.pathname.replace("/", "| ").replace("-", " ").toUpperCase()}`;
        }

        if (location.state) {
            document.title = location.state;
        }
    }, [location.pathname, location.state]);

    const storedTheme = localStorage.getItem("theme") || "light";

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer
                position="top-right"
                autoClose={ 3000 }
                limit={ 3 }
                hideProgressBar={ true }
                newestOnTop
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                draggable
                pauseOnHover={ false }
                theme={ storedTheme === "dark" ? "dark" : "light" }
                transition={ Slide }
            />
        </>
    );
};

export default Root;