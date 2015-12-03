//truncate articles to hide all but first paragraph
blog.truncateArticles = function() {
  $('article p:not(:first-child').hide();
  //create event handler
  $('main').on('click', '.read-on', function(event) {
    event.preventDefault();
    //fadeIn on click event
    $(this).parent().find('p').fadeIn();
  });
};

blog.truncateArticles();

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


//populating the drop down menu
// //chris' code
// $('select[id="category"]').change(function() {
//   $('author').find('option:first').attr('selected', 'selected');
//   $('main').find('article').show();
//   console.log($(this).val());
//   if ($(this).val() !== 'none') {
//     $('.postCategory:not(:contains(' + $(this).val() + '))').parent().hide();
//   }
// });
