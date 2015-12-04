
//populating the dropdown menu
$(function() {
  $('select .author').change(function() {
    $('author').find('option:first').attr('selected', 'selected');
    $('header').find('template').show();
    console.log($(this).val());
    if ($(this).val() !== 'none') {
      $('.this.author:not(:contains(' + $(this).val() + '))').parent().hide();
    }
  });
});
