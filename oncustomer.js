  $.when($.ajax('http://localhost:3001/customers')).then(function (customers) {
  $('.preloader').css('display', 'none');
  onCustomers(customers);
  });

  function onCustomers (customers) {
    customers.reverse().map((i) => {
      $('.contact_block').append(
        `<div class='block_info contact'>
            <div class='block_info-img visible'>
              <img class='block_info__info_img' src=${i.thumbnailUrl} alt='' />
            </div>
            <span class='d-none title visible'>name</span>
            <p class='block_info__info_name visible'>${i.name}</p>
            <span class='d-none title visible'>email</span>
            <p class='block_info__info_email visible'>${i.email}</p>
            <span class='d-none title visible'>status</span>
            <p class='block_info__info_status visible'>${i.status}</p>
            <span class='d-none title visible'>address</span>
            <p class='block_info__info_adress visible'>${i.address}</p>
            <span class='d-none title visible'>phone</span>
            <p class='block_info__info_phone visible'>${i.phone}</p>
            <span class='d-none title visible'>website</span>
            <p class='block_info__info_phone visible'>${i.website}</p>
          <div class='block_info_contact-form d-none'>
            <form class='edit__form'>
              <input type='text' name='name' placeholder='Name' />
              <input type='text'name='thumbnailUrl' placeholder='Url image' />
              <input type='text'name='status' placeholder='Status' />
              <input type='email'name='email' placeholder='Email' />
              <input type='text'name='address' placeholder='Adress' />
              <input type='text' name='phone' placeholder='Phone' />
              <input type='text' name='website' placeholder='Website' />
              <input type='submit' value='Save' class='edit-btn' />
            </form>
          </div>
          <div class='block_info__btns' data-id=${i.id}>
            <button class='block__info--block-btn_remove d-none btn'>Remove</button>
          </div>
          <p class='block_info__info_arrow'></p>
          </div>`,
      );
    })
  }

 $('.sidebar_modal_add-form').on('click', function() {
   let data = {};
   $('.sidebar_modal_form input').each(function() {
     data[this.name] = $(this).val();
   })
   $.ajax({
     type: 'POST',
     url: 'http://localhost:3001/customers',
     data: data,
     success: function() {
      $('#sidebar_modal-close').click();
      location.reload(true);
     }
   });
 })
