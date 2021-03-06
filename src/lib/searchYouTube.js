var searchYouTube = (options, callback) => {
  //jQuery get request
  // $.get( url [, data ] [, success ] [, dataType ] )
  //on success, callback function
  //accept options to use in GET

  //only get embeddable videos


  //make sure it passes all tests


  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    },
    dataType: 'json'
  })
  .done(({items}) => {
    debugger;
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    debugger;
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

//

window.searchYouTube = searchYouTube;
