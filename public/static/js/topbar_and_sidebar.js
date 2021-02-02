
//Navbar background change with scroll
$(window).ready(function(){

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
        windowWidth = $(window).width();
        if(windowWidth>769){
            $(".navbar").addClass('navbar-fixed-top');
        }else{
            $(".navbar").removeClass('navbar-fixed-top');
        }
    });
    
    //Fixed top for mobile version while resize ended
    
    
    
    
    //Code for side menu slide left and right
    $(".menu_bar").click(function(){
        window_height = $(window).height();
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