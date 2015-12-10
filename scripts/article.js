var Article = function(property) {
  this.title = property.title;
  this.author = property.author;
  this.authorUrl = property.authorUrl;
  this.category = property.category;
  this.daysAgo = property.daysAgo;
  this.body = property.body; // || marked(this.markdown)
  this.publishedOn = property.publishedOn;
};

// Article.prototype.toHTML = function () {
//   //select template element
//   var $temp1 = $('#template').clone();
//   //clone the element
//   $temp1.find('.title').html(this.title);
//   //change the author info
//   $temp1.find('.author').html('<a href="' + this.authorUrl + '">' + this.author + '</a>');
//   //$temp1.find('.authorUrl').html(this.authorUrl);
//   //change body
//   $temp1.find('.body').html(this.body);
//   //change publishedOn
//   $temp1.find('.publishedOn').html(this.getDate());
//   //remove repeats of template - don't know if it's working
//   $temp1.removeAttr('id');
//   //populating the .catFilter dropdown
//   // var string2 = ('<option>' + this.category + '</option>');
//   // $('.catFilter').append(string2);
//   // //populating the .autFilter dropdown
//   // var string1 = ('<option>' + this.author + '</option>');
//   // $('.autFilter').append(string1);
//   //append back to html page
//   $('main').append($temp1);
// };

//new code borrowed from Seth
Article.prototype.toHTML = function () {
  this.daysAgo = Math.ceil(dateDiff);

  var source = $('#entry-templage').html();
  var template = Handlebars.compile(source);
  return html;
};

Article.prototype.getDate = function () {
  var date = ((Date.parse(new Date()) - Date.parse(this.publishedOn)) / 86400000 );
  return Math.floor(date) + ' days ago';
};

//code from Seth
blog.newArticleLoop = function () {
  var newArticle = new Articles(this.rawData[i]);
  $('main').append(newArticle.toHTML()
  );
};
