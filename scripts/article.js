var Article = function(property) {
  this.title = property.title;
  this.author = property.author;
  this.authorUrl = property.authorUrl;
  this.category = property.category;
  this.daysAgo = property.daysAgo;
  this.body = property.body || marked(this.markdown);
  this.publishedOn = property.publishedOn;
};

//i improved my code by looking the class code
Article.prototype.toHTML = function () {
  var source = $('#entry-templage').text();
  var template = Handlebars.compile(source);
  return template(this);
};

Article.prototype.getDate = function () {
  var date = ((Date.parse(new Date()) - Date.parse(this.publishedOn)) / 86400000 );
  return Math.floor(date) + ' days ago';
};
