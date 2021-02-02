import React from 'react';
import Slider from "react-slick";

function ProMember() {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed:3000,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
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
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    }

    return (
        <React.Fragment>
            <section id="premium_member" >
                <div className="container">
                <h2 className="text-center">Premium Members</h2>
                    <div className="premium_members">
                        <Slider {...settings} style={{ width: "100%", height: "100%" }}>
                            <div>
                                <img data-src="https://www.hmweddings.com/uploads/profile_image/profile_241.png" src=" https://www.hmweddings.com/uploads/profile_image/profile_241.png" alt="example 1" />
                                <div className="premium_members_infos text-center">
                                    <strong> ID : HM_23j590</strong>
                                    <div className="members_followers">
                                    <span><span>0</span> Follower(s)</span>
                                    <span><span>1</span> Following</span>
                                    </div>
                                    <a href="#" className="viewProfile"> Full Profile</a>
                                </div>
                            </div>
                            <div>
                                <img data-src="https://www.hmweddings.com/uploads/profile_image/profile_241.png" src=" https://www.hmweddings.com/uploads/profile_image/profile_241.png" alt="example 2" />
                                <div className="premium_members_infos text-center">
                                    <strong> ID : HM_23j590</strong>
                                    <div className="members_followers">
                                    <span><span>0</span> Follower(s)</span>
                                    <span><span>1</span> Following</span>
                                    </div>
                                    <a href="#" className="viewProfile"> Full Profile</a>
                                </div>
                            </div>
                            <div>
                                <img data-src="https://www.hmweddings.com/uploads/profile_image/profile_241.png" src=" https://www.hmweddings.com/uploads/profile_image/profile_241.png" alt="example 3" />
                                <div className="premium_members_infos text-center">
                                    <strong> ID : HM_23j590</strong>
                                    <div className="members_followers">
                                    <span><span>0</span> Follower(s)</span>
                                    <span><span>1</span> Following</span>
                                    </div>
                                    <a href="#" className="viewProfile"> Full Profile</a>
                                </div>
                            </div>
                            <div>
                                <img data-src="https://www.hmweddings.com/uploads/profile_image/profile_241.png" src=" https://www.hmweddings.com/uploads/profile_image/profile_241.png" alt="example 4" />
                                <div className="premium_members_infos text-center">
                                    <strong> ID : HM_23j590</strong>
                                    <div className="members_followers">
                                    <span><span>0</span> Follower(s)</span>
                                    <span><span>1</span> Following</span>
                                    </div>
                                    <a href="#" className="viewProfile"> Full Profile</a>
                                </div>
                            </div>
                            <div>
                                <img data-src="https://www.hmweddings.com/uploads/profile_image/profile_241.png" src=" https://www.hmweddings.com/uploads/profile_image/profile_241.png" alt="example 5" />
                                <div className="premium_members_infos text-center">
                                    <strong> ID : HM_23j590</strong>
                                    <div className="members_followers">
                                    <span><span>0</span> Follower(s)</span>
                                    <span><span>1</span> Following</span>
                                    </div>
                                    <a href="#" className="viewProfile"> Full Profile</a>
                                </div>
                            </div>
                            <div>
                                <img data-src="https://www.hmweddings.com/uploads/profile_image/profile_241.png" src=" https://www.hmweddings.com/uploads/profile_image/profile_241.png" alt="example 6" />
                                <div className="premium_members_infos text-center">
                                    <strong> ID : HM_23j590</strong>
                                    <div className="members_followers">
                                    <span><span>0</span> Follower(s)</span>
                                    <span><span>1</span> Following</span>
                                    </div>
                                    <a href="#" className="viewProfile"> Full Profile</a>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ProMember;