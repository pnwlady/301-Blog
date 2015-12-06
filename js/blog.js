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

//truncate articles to hide all but first paragraph work from Brook in class
blog.truncateArticles = function() {
  $('article p:not(:first-child').hide();
  //create event handler
  $('main').on('click', '.read-on', function(event) {
    event.preventDefault();
    //fadeIn on click event
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};

//create author filter jQuery object ... worked with Tiffine and Robert
//2nd try was assisted by reviewing Dave's code in class
blog.filterAut = function() {
  $('.autFilter').change(funtion() {
    $('#category').find('option:first').attr('selected', true);
    $('main').find('article').show();
    console.log($this.val());
    if ($(this).val() !== 'none') {
      $('.this.author:not(:contains(' + $(this).val() + '))').parent().hide();
    }
  });
};
//create category filter jQuery object


//
//   //populating the .autFilter dropdown
//   var string1 = ('<option>' + this.author + '</option>');
//   $('.autFilter').append(string1);
// };
//
// blog.getCatList = function() {
//   $('#category').change( function() {
//     var string2 = ('<option>' + this.category + '</option>');
//     $('.catFilter').append(string2);
//     //:selected filters elements in #category that were selected- find looks for decendants
//     var $selCat = $('.category').find(':selected').text(category[i]);
//     $('.autFilter').append('<option>' + this.category + '</options>');
//     $('article').hide();
//     //making two selectors to show articles with both classes. not either or
//     //our assignment was to make one show and clear the other
//     //remove author and it would work for the assignment
//     // $('.'+ $selCat + '.' + $selAuth).show();
//     $('.$selCat').show();
//   });
// };
