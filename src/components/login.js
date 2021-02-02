import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "./footer";
import Tine from './tine';
import $ from 'jquery';
import "./login.css";

function Login() {

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

    const [ state, setState ] = useState({ email: '', password: '' });

    const changeEmail = e => {
        setState({ ...state, email: e.target.value });
    }

    const changePassword = e => {
        setState({ ...state, password: e.target.value });
    }

    return (
        <React.Fragment>
            <section style={{ background: "rgba(0,0,0,.9)" }} id="side_menu">
                <div className="side_menu_close side_menu_off">
                    <Link role="button" to="/"></Link>
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
                            <Link className="navbar-brand" to="/"><img style={{ border: "1px solid #693b52" }} className="img-responsive" alt="logo container 1" src="static/images/logo.webp" /></Link>
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
                <section className="container">
                    <div className="login-form">
                        <div className="form-content">
                            <div className="text-center forms_header">
                                <h4 className="text-center">Log In </h4>
                            </div>

                            <form role="form" method="post" action="">
                                <div className="row">
                                    <div className="col-xs-12">
                                    <div className="form-group">
                                        <input required type="text" className="form-control" placeholder="Email or Phone *" value={state.email} onChange={changeEmail} name="email" autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <input required type="password" value={state.password} onChange={changePassword} className="form-control" placeholder="Password *" name="password" />
                                    </div>
                                    <div className="form-group">
                                        <span>Remember Me</span>
                                        <input type="checkbox" id="remember_me" value="checked" />
                                    </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btnSubmit "> Log In </button>
                                </div>
                            </form>
                            <div className="text-center">
                                <br />
                                <a href="" >Recover Password</a>
                                <small><br /> OR <br />  <Link to="/register" ><u>Create a new account</u></Link></small>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                <Tine />
            </div>            
        </React.Fragment>
    );
}

export default Login;