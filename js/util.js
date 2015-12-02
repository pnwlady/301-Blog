//truncate articles to hide all but first paragraph
blog.truncateArticles = function() {
  $('article p:not(:first-child').hide();
  //create event handler
  $('main').on('click', 'read-on', function(event) {
    event.preventDefault();
    //fadeIn on click event
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};

blog.truncateArticles();
