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

//create author list dropdown helped by Tiffine and Robert
blog.createList = function() {
  $('article').each(function() {
    var list = $(this).find('.authors').text();
    var option = ('<option value="' + val + '">' + val + '</option>');
    $('#authors').append(option);

    list = $(this).find('.category').text();
    option = '<option value="' + val + '">' + val + '</option>';
    $('#catetory').append(option);
});

//pair programmed with Robert Hill
blog.filterAuthList = function(){
  $('#authDropDown').on('change', function() {
    $('main').find('article').attr('selected', true);
    if($(this).val() !== 'none') {
      $('main').find('.category:not(:contains(' + $(this).val() + '))').parents('article').hide();
    } else {
      $('main').find('article').show();
      console.log(this.value);
    }
    $('#category').val('');
  });
};
blog.filterCatList = function(){
  $('#catetory').on('change', function() {
    $('main').find('article').attr('selected', true);
    if($(this).val() !== 'none') {
      $('main').find('.category:not(:contains(' + $(this).val() + '))').parents('article').hide();
    } else {
      $('main').find('article').show();
      console.log(this.value);
    }
    $('#authors').val('');
  });
};
//navigation control - needs work to be built here
//JSON file
blog.exportJSON = function() {
  $('#export-field').show();
  $('#article-json').val(JSON.stringify(blog.buildArticle()) + ',');
};
