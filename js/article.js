var Article = function(property) {
  this.title = property.title;
  this.author = property.author;
  this.authorUrl = property.authorUrl;
  this.category = property.category;
  this.body = property.body;
  this.publishedOn = property.publishedOn;
  //blog.articles.push(temp);
  //temp.toHTML();
};

Article.prototype.toHTML = function () {
  //select template element
  var $temp1 = $('#template').clone();
  //clone the element
  $temp1.find('.title').html(this.title);
  //change the author info
  $temp1.find('.author').html('<a href="' + this.authorUrl + '">' + this.author + '</a>');

  //$temp1.find('.authorUrl').html(this.authorUrl);
  //change body
  $temp1.find('.body').html(this.body);
  //change publishedOn
  $temp1.find('.publishedOn').html(this.publishedOn);
  //append back to html page
  $('main').append($temp1);
};
