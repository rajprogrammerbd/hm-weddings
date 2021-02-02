import React from 'react';
import Slider from "react-slick";

function HappyStory() {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed:3000,
        autoplaySpeed: 2000,
        arrows: false,
    
    
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,  
              slidesToScroll: 2
            } 
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          }
        ]
    }

    return (
        <React.Fragment>
            <section id="happy_story">
                <div className="container">
                    <h2 className="text-center">Happy stories</h2>
                    <div className="happy_stories">
                        <Slider {...settings}>
                            <div className="happy_stories_elements">
                                <img className="img-responsive" data-src="https://www.hmweddings.com/uploads/happy_story_image/happy_story_71_1_thumb.jpg" src=" https://www.hmweddings.com/uploads/happy_story_image/happy_story_71_1_thumb.jpg" alt="example 1" />
                                <div className="happy_stories_caption">
                                    <p>Love is here .. <span className="pull-right loves"><i className="love1 fa fa-heart"></i> <i className="love2 fa fa-heart"></i></span></p>
                                </div>
                            </div>
                            <div className="happy_stories_elements">
                                <img className="img-responsive" data-src="https://www.hmweddings.com/uploads/happy_story_image/happy_story_71_1_thumb.jpg" src="https://www.hmweddings.com/uploads/happy_story_image/happy_story_71_1_thumb.jpg" alt="example 2" />
                                <div className="happy_stories_caption">
                                    <p>Love is here .. <span className="pull-right loves"><i className="love1 fa fa-heart"></i> <i className="love2 fa fa-heart"></i></span></p>
                                </div>
                            </div>
                            <div className="happy_stories_elements">
                                <img className="img-responsive" data-src="https://www.hmweddings.com/uploads/happy_story_image/happy_story_71_1_thumb.jpg" src="https://www.hmweddings.com/uploads/happy_story_image/happy_story_71_1_thumb.jpg" alt="example 3" />
                                <div className="happy_stories_caption">
                                    <p>Love is here .. <span className="pull-right loves"><i className="love1 fa fa-heart"></i> <i className="love2 fa fa-heart"></i></span></p>
                                </div>
                            </div>
                            <div className="happy_stories_elements">
                                <img className="img-responsive" data-src="https://www.hmweddings.com/uploads/happy_story_image/happy_story_71_1_thumb.jpg" src=" https://www.hmweddings.com/uploads/happy_story_image/happy_story_71_1_thumb.jpg" alt="example 4" />
                                <div className="happy_stories_caption">
                                    <p>Love is here .. <span className="pull-right loves"><i className="love1 fa fa-heart"></i> <i className="love2 fa fa-heart"></i></span></p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default HappyStory;