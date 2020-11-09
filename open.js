$(document).ready(function () {
  $('body').on('click', '.block_info__info_arrow', function (e) {
    $(e.currentTarget).parent().toggleClass('open');
    $(e.currentTarget).parent().find('button').toggleClass('d-none');
  });
});

