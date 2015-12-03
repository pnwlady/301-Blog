var Article = function(property) {
  this.title = property.title;
  this.author = property.author;
  this.authorUrl = property.authorUrl;
  this.category = property.category;
  this.body = property.body;
  this.publishedOn = property.publishedOn;
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
  //remove repeats of template - don't know if it's working
  $temp1.removeAttr('id');
  //append back to html page
  $('main').append($temp1);
};

//am I adding code in index.js to name blog function shown in class (don't leave it floating)
