import { Parallax, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTypewriter } from 'react-simple-typewriter';

const Slider = () => {
    const [text] = useTypewriter({
        words: ['Welcome to Southeast Asia', 'Top Destination for Relaxation'],
        loop: 0,
        typeSpeed: 100,
        deleteSpeed: 70
    });

    return (
        <Swiper
            style={ {
                '--swiper-navigation-color': '#24516b',
                '--swiper-pagination-color': '#24516b',
            } }
            modules={ [Parallax, Autoplay, Navigation, Pagination] }
            speed={ 2000 }
            parallax={ true }
            autoplay={ {
                delay: 10000,
                disableOnInteraction: false,
            } }
            slidesPerView={ 'auto' }
            centeredSlides={ true }
            rewind={ true }
            navigation={ true }
            pagination={ { clickable: true } }
            className="mySwiper"
        >

            <SwiperSlide className="parallax-bg" style={ { backgroundImage: 'linear-gradient(to top, rgba(14,22,27,0.4), rgba(14,22,27,0.4)), url(https://media.cntraveler.com/photos/60d24980834e550f9a4e1021/2:1/w_2560,c_limit/636590238)' } }>
                <div className="tracking-widest flex justify-evenly items-center flex-col h-full text-center w-4/5 lg:w-1/2 mx-auto">
                    <p className="text-4xl lg:text-6xl mb-6" data-swiper-parallax="-300">
                        <span className="bg-gradient-to-r from-[#94c1db] to-accent bg-clip-text text-transparent">{ text }</span>
                    </p>
                    <p className="lg:text-3xl text-xl" data-swiper-parallax="-100">
                        Wrapped in rainforests, edged by golden sands, crowned by volcanoes, studded with ruins of lost civilizations: this is Southeast Asia as you have always imagined it.
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide className="parallax-bg" style={ { backgroundImage: 'linear-gradient(to top, rgba(14,22,27,0.4), rgba(14,22,27,0.4)), url(https://assets.isu.pub/document-structure/230327042855-799da3f1ebdfae2d34fe7dcbb1d0101b/v1/6eef991870feafd139d487424393c678.jpeg)' } }>
                <div className="tracking-widest flex justify-evenly items-center flex-col h-full text-center w-4/5 lg:w-1/2 mx-auto">
                    <p className="lg:text-3xl text-xl" data-swiper-parallax="-100">
                        A destination for every dream
                    </p>
                </div>
            </SwiperSlide>

            <SwiperSlide className="parallax-bg" style={ { backgroundImage: 'linear-gradient(to top, rgba(14,22,27,0.4), rgba(14,22,27,0.4)), url(https://cache2.travelfish.org/b/assets/2015/gallery/largeR/gallery_location_largeR_162_1491775066.jpg)' } }>
                <div className="tracking-widest flex justify-evenly items-center flex-col h-full text-center w-4/5 lg:w-1/2 mx-auto">
                    <p className="lg:text-3xl text-xl" data-swiper-parallax="-100">
                        From majestic rainforests and endless beaches to cultures that seem almost magical, these are the wonders of Southeast Asia
                    </p>
                </div>
            </SwiperSlide>
        </Swiper >
    );
};

export default Slider;