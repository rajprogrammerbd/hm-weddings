//select to code for search
$(document).ready(function() {
    $('.finds_select').select2();
});
//select to code for search ended


// Code for browse by country search
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".countries li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      
    });
  });
});
// Code for browse by country search ended



// Show more show less code

$('ul.expandible').each(function(){
    var $ul = $(this),
        $lis = $ul.find('li:gt(3)'),
        isExpanded = $ul.hasClass('expanded');
    $lis[isExpanded ? 'show' : 'hide']();
    
    
    
    if($lis.length > 0){
        $ul
            .append($('<span class="showmore"><li class="expand ">' + (isExpanded ? 'Show Less' : 'Show More') + '</li></span>')
            .click(function(event){
                var isExpanded = $ul.hasClass('expanded');
                event.preventDefault();
                $(this).html(isExpanded ? 'Show More' : 'Show Less');
                $ul.toggleClass('expanded');
                $lis.toggle();
            }));
    }
});


// Show more show less code ended


