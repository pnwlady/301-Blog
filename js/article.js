var Article = function(property) {
  this.title = property.title;
  this.author = property.author;
  this.authorUrl = property.authorUrl;
  this.category = property.category;
  this.body = property.body;
  this.publishedOn = property.publishedOn;
}

Article.prototype.toHTML = function () {
  // return '<article>' +
  // '<h1>' + this.title + '</h1>' +
  // '<section>' + this.author + this.authorUrl + '</section>' +
  // '<p>' + this.body + '</p>' +
  // this.publishedOn + '</article>';

  //select template element
  var $temp1 = $('#template').clone();
  console.log($temp1 + '$');
  //clone the element
  $temp1.find('.title').html(this.title);
  //change the author info
  $temp1.find('.author').html(this.author);
  console.log(this.author + "$$");
  $temp1.find('.authorUrl').html(this.authorUrl);
  //change body
  $temp1.find('.body').html(this.body);
  //change publishedOn
  $temp1.find('.publishedOn').html(this.publishedOn);
  //append back to html page
  $('main').append($temp1);
}
