for (var i = 0; i < blog.rawData.length; i += 1) {
  var article = new Article(blog.rawData[i]);
  blog.articles.push(article);
  article.toHTML();
  console.log(blog.rawData.length);
}
