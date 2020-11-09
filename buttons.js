$(document).ready(function () {
$('body').on('click', '.block__info--block-btn_remove.btn', function() {
    let id = $(this).parent().attr('data-id');
    $.ajax({
      type: 'DELETE',
      url:`http://localhost:3001/customers/${id}`,
      success: function() {
          location.reload(true);
      }
    })
  })
})

$(document).ready(function () {
    $('body').on('click', '.', function() {
    let id = $(this).parent().attr('data-id');
    let data = {};
   $('.sidebar_modal_form input').each(function() {
     data[this.name] = $(this).val();
   })
   $.ajax({
     type: 'PATCH',
     url: `http://localhost:3001/customers/${id}`,
     data: data,
     success: function() {
      location.reload(true);
     }
   });
      })
    })