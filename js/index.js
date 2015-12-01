for (var i = 0; i < blog.rawData.length; i++) {
  var article = new Article(blog.rawData[i]);
  console.log(blog.articles.push(article));
}

// var template = function() {
//   $('#template').html();
//   $('.title').html();
//   $('.author').html();
//   $('.authorUrl').html();
//   $('.category').html();
//   $('.body').html();
//   $('.publishedOn').html();
// }
//
// template();
// console.log(blog.rawData);
//
// var $clonedArticle = $('#template').clone();
//
// $clonedArticle.find('.title').html();
//
// $(function() {
//   $().html().clone().appendTo();
// });
