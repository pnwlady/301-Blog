//bad code, I'm rewriting for filters
//coded after reviewing dave's in class
blog.getAuthList = function() {
  //populating the dropdown menu
  $(function() {
    $('#authors').change(function() {
      //possibly remove [i]?
      $('#author[i]').find('option:first').attr('selected', true);
      $('main').find('#template').show();
      console.log($(this).val());
      if ($(this).val() !== 'none') {
        $('.this.author:not(:contains(' + $(this).val() + '))').parent().hide();
      }
    });

    //event handler
    $('.authors').change( function () {
      var $selAuth = $('.author').find(':selected').attr('selected', true);
      $('.$selAuth').show();
    });
  });
};

blog.getCatList = function() {
  $('.category').change( function() {
    //:selected filters elements in #category that were selected- find looks for decendants
    var $selCat = $('.category').find(':selected').text(category[i]);
    $('.autFilter').append('<option>' + this.category + '</options>');
    $('article').hide();
    //making two selectors to show articles with both classes. not either or
    //our assignment was to make one show and clear the other
    //remove author and it would work for the assignment
    // $('.'+ $selCat + '.' + $selAuth).show();
    $('.$selCat').show();
  });
};
