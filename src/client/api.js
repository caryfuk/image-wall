import rp from 'request-promise';

export function fetchFromFlickr(query) {
  const self = this;
  console.log('query: ' + query);
  const options = {
    withCredentials: false,
    uri : window.location.protocol + '//' + window.location.hostname + ':3001/search?query=' + query,
    method : 'GET'
  };
  rp(options)
    .then(function(response) {
        self.setState({photos: JSON.parse(response)});
      }
    )
    .catch(function(e) {
      console.error('Error loading response: ' + e);
    });
}
