var blog = {};
blog.articles = [];

// //1st try this code is borrowing from class demo/mirandalily
// blog.sortArticles = function() {
//   blog.rawData.sort(function(a,b) {
//     if (a.publishedOn > b.publishedOn) {
//       return -1;
//     }
//     if (a.publishedOn < b.publishedOn) {
//       return 1;
//     }
//     return 0;
//   });
// };

//method from instructor code
blog.sortArticles = function() {
  blog.rawData.sort(function(a,b) {
    return a.publishedOn < b.publishedOn;
  });
};

// 1st try
// blog.createArticles = function() {
//   for (var i = 0; i < blog.rawData.length; i += 1) {
//     var article = new Article(blog.rawData[i]);
//     blog.articles.push(article);
//     article.toHTML();
//   }
// };

blog.importArticles = function() {
  blog.rawData.forEach(function(ele) {
    blog.articles.push(new Article(ele));
  });
};

blog.appendArticle = function(a) {
  $('#articles').append(a.toHtml());
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
    //draft code from class
    if (!$(this).hasClass('draft')) {
      var list = $(this).find('.authors').text();
      var option = ('<option value="' + val + '">' + val + '</option>');
      $('#authors').append(option);

      list = $(this).find('.category').text();
      option = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value=' + val + ']').length === 0) {
        $('#category-filter').append(option);
      }
    }
  });
};
// //code from Seth
// blog.newArticleLoop = function () {
//   var newArticle = new Articles(this.rawData[i]);
//   $('main').append(newArticle.toHTML()
//   );
// };

//pair programmed with Robert Hill
blog.filterAuthList = function(){
  $('#authors').on('change', function() {
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
