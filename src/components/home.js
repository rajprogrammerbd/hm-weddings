import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ProMember from './proMember';
import HappyStory from "./happyStory";
import Videos from './video';
import Plan from './plan';
import Gallery from './gallery';
import CurrentNews from "./currentNews.jsx";
import About from './about';
import Country from './country';
import Visitor from "./visitors";
import Maps from './maps';
import Footer from './footer';
import Tine from './tine';
import $ from 'jquery';
import Slide from "./slider";

function Home() {

    useEffect(() => {
        //Navbar background change with scroll
        $(window).ready(function(){

        $(function(){
            $(document).scroll(function() {
                var pgeHeight = $(this).scrollTop(); 
                if(pgeHeight>50){
                    $(".navbar-default").addClass('navbarWhite');
                }else{
                    $(".navbar-default").removeClass('navbarWhite');
                }


            })
        })
        //Navbar background change with scroll ended
    
    
        //Fixed top for desktop version
        let windowWidth = $(window).width();
            if(windowWidth>769){
                $(".navbar").addClass('navbar-fixed-top');
            }else{
                $(".navbar").removeClass('navbar-fixed-top');
            }
            
            
            $(function(){
                $(window).scroll(function() {
                    var pgeHeight = $(this).scrollTop(); 
                    if(pgeHeight>50){
                        $(".navbar-default").addClass('navbarWhite');
                    }else{
                        $(".navbar-default").removeClass('navbarWhite');
                    }


                })
            })
            //Navbar background change with scroll ended




            //Fixed top for desktop version
            windowWidth = $(window).width();
                if(windowWidth>769){
                    $(".navbar").addClass('navbar-fixed-top');
                }else{
                    $(".navbar").removeClass('navbar-fixed-top');
                }

        })
        //Fixed top for desktop version ended 
    
    
        //Fixed top for mobile version while resize
        $(window).resize(function(){
            let windowWidth = $(window).width();
            if(windowWidth>769){
                $(".navbar").addClass('navbar-fixed-top');
            }else{
                $(".navbar").removeClass('navbar-fixed-top');
            }
        });

        //Fixed top for mobile version while resize ended
    

        //Code for side menu slide left and right
        $(".menu_bar").click(function(){
            let window_height = $(window).height();
            $("#side_menu").css({
                height:window_height+'px'
            });

            $("#side_menu").animate({
                'margin-right':'0px'
            }, 500);


        })

        $(".side_menu_off").click(function(){
            $("#side_menu").animate({
                'margin-right':'-250px'
            }, 500);
        });

        //Code for side menu slide left and right ended
    }, []);

    return (
        <React.Fragment>
            <section style={{ background: "rgba(0,0,0,.9)" }} id="side_menu">
                <div className="side_menu_close side_menu_off">
                    <Link role="button" to="/"><i className="fa fa-arrow-circle-right"></i></Link>
                </div>
                <div className="side_menu_log_reg">
                    <Link to="/login">LOGIN</Link>
                    <Link to="/register">REGISTER</Link>
                </div>

                <div className="side_menus_menu">
                    <Link to="/">Home</Link>
                    <a href="/">Active Member</a>
                    <a href="/">Premium Plans</a>
                    <a href="/">Happy Stories</a>
                    <a href="/">Contact Us</a>
                    <a href="/">About Us</a> 
                    <a href="/">Help</a>
                    <a href="/">Blog</a>
                    <a href="/">Download App</a>
                    <a href="/">Media & Press</a>
                </div>


                <div className="side_menu_contacts">
                    <p>
                    Give Us Your Feedback
                    Need any help? Write to us at hmweddingsdev@gmail.com
                    </p>
                    <ul>Call Us On
                        <li>(+880) 25881149 </li>
                        <li>(+880) 1789168581 </li>
                        <li>(+880) 1731556712 </li>
                    </ul>
                </div>

                <div className="side_menu_follow_us">
                    <a href="/"><i className="fa fa-facebook"></i></a>
                    <a href="/"><i className="fa fa-linkedin"></i></a>
                    <a href="/"><i className="fa fa-twitter"></i></a>
                    <a href="/"><i className="fa fa-instagram"></i></a>
                    <a href="/"><i className="fa fa-link"></i></a>
                    <a href="/"><i className="fa fa-youtube"></i></a>
                </div>
            </section>

            <nav className="navbar navbar-default  ">
            <div className="container">
                <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/"><img style={{ border: "1px solid #693b52" }} className="img-responsive" alt="logo container 1" src="static/images/logo.webp" /></a>
                </div>
                <div className="all_nav_buttons">
                    <ul className="nav navbar-nav office_time nav_buttons text-center">
                        <li><a href="/">Saturday- Thursday 10:00 AM - 6:00 PM</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right nav_buttons">
                        <li role="button" className="pull-right menu_bar"><a href="#"><i className="fa fa-bars"></i></a></li>
                        <li className="pull-right"><Link to="/login">Log In</Link></li>
                        <li className="pull-right hm_register_btn"><Link to="/register">Register Free</Link></li>
                    </ul>
                </div>
                </div>
            </div>
            </nav>


            <div className="side_menu_off">
                <Slide />


                <form id="find" action="">
                    <div className="inner container-fluid ">
                        <div className="row">
                            <div className="find_fast_part">
                                <div className="col-md-2 col-xs-3">
                                    <select className="form-control finds_select">
                                        <option value="">Choose</option>
                                        <option value="">One </option>
                                        <option value="">One </option>
                                    </select>
                                </div>
                                <div className="col-md-2 col-xs-3">
                                    <select className="form-control finds_select" data-show-subtext="false" data-live-search="true">
                                        <option value="">Religion </option>
                                        <option value="">Axetumic  </option>
                                        <option value="">One </option>
                                    </select>
                                </div>
                                <div className="col-md-1 col-xs-3 ">
                                    <select className="form-control finds_select">
                                        <option value="">From Height </option>
                                        <option value="">2.2 '' </option>
                                        <option value="">One </option>
                                    </select>
                                </div>
                                <div className="col-md-1 col-xs-3 ">
                                    <select className="form-control finds_select" >
                                        <option value="">To Height </option>
                                        <option value="">2.2 '' </option>
                                        <option value="">One </option>
                                    </select>
                                </div>
                            </div>

                            <div className="find_second_part">

                                <div className="col-md-1 col-xs-3">
                                    <select className="form-control finds_select">
                                        <option value="">From Age  </option>
                                        <option value="">12 yrs </option>
                                        <option value="">One </option>
                                    </select>
                                </div>
                                <div className="col-md-1 col-xs-3">
                                    <select className="form-control finds_select">
                                        <option value="">To Age  </option>
                                        <option value="">12 yrs </option>
                                        <option value="">One </option>
                                    </select>
                                </div>
                                <div className="col-md-2 col-xs-3">
                                    <select className="form-control finds_select">
                                        <option value="">Country</option>
                                        <option value="">Argentina uruguya  </option>
                                        <option value="">One </option>
                                    </select>
                                </div>
                                <div className="col-md-1 col-xs-3">
                                    <select className="form-control finds_select">
                                        <option value="">Status </option>
                                        <option value="">Never Married </option>
                                        <option value="">One </option>
                                    </select>
                                </div>
                                <div className="col-md-1 col-xs-3 pull-right">
                                    <input className="btn btn-default btn-search" type="submit" value="Search" name="Search" id="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


        <CurrentNews />
        <ProMember />
        <Plan />
        <HappyStory />
        <Videos />
        <Gallery />
        <About />

        <Country />


        <Visitor />


        <Maps />

        <Footer />

        <Tine />



            </div>

            
        </React.Fragment>
    );
}

export default Home;