$(function() {
  blog.createArticles();
  blog.sortRawData();
  //when page loads, hide the template
  $('#template').hide();
  //truncate
  blog.truncateArticles();
  blog.getAuthList();
  blog.getCatList();
//am I adding code in index.js to name blog function shown in class (don't leave it floating)
});
