$(function() {
  blog.sortArticles();
  blog.importArticles();
  //when page loads, hide the template
  blog.appendArticles();
  //truncate
  blog.truncateArticles();
  // blog.populateFilters();
  blog.filterAuthList();
  blog.filterCatList();
//am I adding code in index.js to name blog function shown in class (don't leave it floating)
});
