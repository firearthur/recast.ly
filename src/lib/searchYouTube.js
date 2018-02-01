var searchYouTube = (query, callback) => {

  const server = 'https://www.googleapis.com/youtube/v3/search';
  const request = {'maxResults': '6',
    'key': window.YOUTUBE_API_KEY,
    'part': 'snippet',
    'q': query,
    'type': ''
  };
  $.get(server, request)
    .done(({items}) => {
      callback(items);
    });
           
};

window.searchYouTube = searchYouTube;
