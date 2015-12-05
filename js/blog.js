var blog = {};
blog.articles = [];

//this code is borrowing from class demo/mirandalily
blog.sortRawData = function() {
  blog.rawData.sort(function(a,b) {
    if (a.publishedOn > b.publishedOn) {
      return -1;
    }
    if (a.publishedOn < b.publishedOn) {
      return 1;
    }
    return 0;
  });
};

blog.createArticles = function() {
  for (var i = 0; i < blog.rawData.length; i += 1) {
    var article = new Article(blog.rawData[i]);
    blog.articles.push(article);
    article.toHTML();
  }
};

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

blog.getAuthList = function() {
  //populating the dropdown menu

};

// blog.getCatList = function() {
//   $('.category').change( function() {
//     //:selected filters elements in #category that were selected- find looks for decendants
//     var $selCat = $('.category').find(':selected').text(category[i]);
//     $('.autFilter').append('<option>' + this.category + '</options>');
//     // $('article').hide();
//     //making two selectors to show articles with both classes. not either or
//     //our assignment was to make one show and clear the other
//     //remove author and it would work for the assignment
//     // $('.'+ $selCat + '.' + $selAuth).show();
//     $('.$selCat').show();
//   });
// };
