$('.sidebar_search').on('input', function () {
  let val = $('.sidebar_search').val().toLowerCase().trim();
  let allElem = $('.block_info__info_name');

  if (val != '') {
    allElem.each((i, elem) => {
      if ($(elem).html().toLowerCase().search(val) == -1) {
        $(elem).parent().addClass('d-none');
        $(elem).parent().removeClass('open');
      } else {
        $(elem).parent().removeClass('d-none');
        $(elem).parent().removeClass('open');
      }
    });
  } else {
    allElem.each((i, elem) => {
      $(elem).parent().removeClass('d-none');
    });
  }
});

$('.sidebar_filter').on('change', function () {
  let status = $('.block_info__info_status');

  status.each((i, elem) => {
    if ($(this).val() == 'all') {
      $(elem).parent().css('display', 'flex');
      $(elem).parent().removeClass('open');
    } else {
      if ($(elem).text() == $(this).val()) {
        $(elem).parent().css('display', 'flex');
        $(elem).parent().removeClass('open');
      } else {
        console.log($(elem));
        $(elem).parent().css('display', 'none');
        $(elem).parent().removeClass('open');
      }
    }
  });
});
