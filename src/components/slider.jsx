import React from 'react';
import Slider from "react-slick";


function Slide() {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
    }
    
    return (
        <React.Fragment>
            <section id="home_slider" className="">
                <Slider className="responsive " {...settings}>
                    <div style={{ display: "none" }}>
                        <div style={{ backgroundImage: "url('https://www.hmweddings.com/uploads/home_page/slider_image/slider_image_3.webp')" }}>
                            <h1 className="text-center caption" style={{ color: 'white' }}>Happiness is here </h1>
                        </div>
                    </div>

                    <div style={{ display: "none" }}>
                        <div style={{ backgroundImage: "url('https://www.hmweddings.com/uploads/home_page/slider_image/slider_image_4.webp')" }}>
                            <h1 className="text-center caption" style={{ color: 'white' }}>Find your life partner today </h1>
                        </div>
                    </div>
                </Slider>
            </section>
        </React.Fragment>
    );
}

export default Slide;