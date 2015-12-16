blog = {};
blog.articles = [];

//method from instructor code
blog.sortArticles = function() {
  blog.rawData.sort(function(a,b) {
    return a.publishedOn < b.publishedOn;
  });
};

blog.importArticles = function() {
  blog.rawData.forEach(function(article) {
    var art = new Article(article);
    blog.articles.push(art);
  });
};

blog.appendArticles = function() {
  this.articles.forEach(function(article){
    $('#articles').append(article.toHTML());
  });
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

//create author list dropdown helped by Tiffine and Robert, made some changes from class code
// blog.populateFilters = function() {
//   $('article').each(function() {
//     //draft code from class
//     if (!$(this).hasClass('draft')) {
//       var val = $(this).find('address a').text();
//       var option = ('<option value="' + val + '">' + val + '</option>');
//       $('#autFilter').append(option);
//
//       list = $(this).data('category').text();
//       option = '<option value="' + val + '">' + val + '</option>';
//       if ($('#catFilter option[value=' + val + ']').length === 0) {
//         $('#catFilter').append(option);
//       }
//     }
//   });
// };

//pair programmed with Robert Hill, ammended looking at class code
blog.filterAuthList = function() {
  $('#autFilter').on('change', function() {
    // $('main').find('article').attr('selected', true);
    if($(this).val()) {
      // $('main').find('.author:not(:contains(' + $(this).val() + '))').parents('article').hide();
      $('article').hide();
    } else {
      // $('main').find('article').show();
      $('article').fadeIn();
      $('article.draft').hide();
    }
    console.log($('#catFilter').val(''));
    $('#catFilter').val('');
  });
};

blog.filterCatList = function(){
  $('#catFilter').on('change', function() {
    // $('main').find('article').attr('selected', true);
    if($(this).val()) {
      $('article').hide();
      $('article[data-category="' + util.slug($(this).val()) + '"]').fadeIn();
      // $('main').find('.category:not(:contains(' + $(this).val() + '))').parents('article').hide();
    } else {
      $('article').fadeIn();
      $('article.draft').hide();
      // $('main').find('article').show();
      console.log($('autFilter').val(''));
    }
    $('#autFilter').val('');
  });
};
//navigation control - needs work to be built here
//JSON file
blog.exportJSON = function() {
  $('#export-field').show();
  $('#article-json').val(JSON.stringify(blog.buildArticle()) + ',');
};
