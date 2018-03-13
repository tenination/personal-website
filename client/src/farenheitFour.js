

function getMovieTitles(query) {
	var substr = query;
  axios({
      method: 'get',
      url: `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        
      });
}