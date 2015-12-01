var Article = function(property) {
  this.title = property.title;
  this.author = property.author;
  this.authorUrl = property.authorUrl;
  this.category = property.category;
  this.body = property.body;
  this.publishedOn = property.publishedOn;
}

Article.prototype.toHTML = function () {
  return '<article>' +
  '<h1>' + this.title + '</h1>' +
  '<section>' + this.author + this.authorUrl + '</section>' +
  '<p>' + this.body + '</p>' +
  this.publishedOn + '</article>';
}
