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

// blog.createArticles = funtion() {
//   for (var i = 0; i < blog.rawData.length; i++) {
//     var temp = new Article (blog.rawData[i]);
//     temp.toHTML();
//   }
// }
