$(document).ready(function() {
    $('.sidebar_btn-add').click( function(event){
      event.preventDefault();
      $('#sidebar_modal-overlay').fadeIn(297,	function(){
        $('#sidebar_modal') 
        .css('display', 'block')
        .animate({opacity: 1}, 198);
      });
    });
  
    $('#sidebar_modal-close, #sidebar_modal-overlay').click( function(){
      $('#sidebar_modal').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#sidebar_modal-overlay').fadeOut(297);
      });
    });
  });

