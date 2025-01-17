import Countries from "../components/Countries/Countries";
import Newsletter from "../components/Newsletter/Newsletter";
import Slider from "../components/Slider/Slider";
import Stats from "../components/Stats/Stats";
import TouristSpots from "../components/TouristSpots/TouristSpots";

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <Stats></Stats>
            <TouristSpots></TouristSpots>
            <Countries></Countries>
            <Newsletter></Newsletter>
        </>
    );
};

export default Home;