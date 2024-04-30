import Newsletter from "../components/Newletter/Newsletter";
import Slider from "../components/Slider/Slider";
import TouristSpots from "../components/TouristSpots/TouristSpots"

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <TouristSpots></TouristSpots>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;