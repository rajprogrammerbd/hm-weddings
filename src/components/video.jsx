import React, { useEffect } from 'react';
import $ from 'jquery';
import lightGallery from 'lightgallery';

function Videos() {
    
    useEffect(() => {
        $("#video-gallery").lightGallery();
    }, []);

    return (
        <React.Fragment>
            <section className="full_video_sessions">
                <h2 className="text-center"> Video Session's  </h2>
                <div id="bg_video" style={{ backgroundColor: "url(https://www.hmweddings.com/uploads/home_body_section/10f0408cc6213f4db3bd4a48f83c6237.webp)" }}>
                    <div className="container video">
                    <div className="row">
                        <br />
                        <br />
                        <div className="demo-gallery">
                            <ul id="video-gallery">
                                <li className="video" data-src="https://youtu.be/AW66YInGKN4" data-poster="https://i.ytimg.com/vi/AW66YInGKN4/mqdefault.jpg">
                                <a href="">
                                    <img className="img-responsive image_slide" src="https://i.ytimg.com/vi/AW66YInGKN4/mqdefault.jpg" alt="custom text" />
                                    <div className="demo-gallery-poster">
                                        <img className="img-responsive" src="https://www.hmweddings.com/uploads/youtube_video/play-button.png" alt="custom text" />
                                    </div>
                                </a>
                                </li>
                                <li  className="video" data-src="https://youtu.be/HY6Qi2ikDG4" data-poster="https://i.ytimg.com/vi/HY6Qi2ikDG4/mqdefault.jpg">
                                <a href="">
                                    <img className="img-responsive image_slide" src="https://i.ytimg.com/vi/HY6Qi2ikDG4/mqdefault.jpg" alt="custom text" />
                                    <div className="demo-gallery-poster">
                                        <img className="img-responsive" src="https://www.hmweddings.com/uploads/youtube_video/play-button.png" alt="custom text" />
                                    </div>
                                </a>
                                </li>
                                <li className="video" data-src="https://youtu.be/nYZyI8RsyI8" data-poster="https://i.ytimg.com/vi/nYZyI8RsyI8/mqdefault.jpg">
                                <a href="">
                                    <img className="img-responsive image_slide" src="https://i.ytimg.com/vi/nYZyI8RsyI8/mqdefault.jpg" alt="custom text" />
                                    <div className="demo-gallery-poster">
                                        <img className="img-responsive" src="https://www.hmweddings.com/uploads/youtube_video/play-button.png" alt="custom text" />
                                    </div>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Videos;