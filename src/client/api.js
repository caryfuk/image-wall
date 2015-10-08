import rp from 'request-promise';

export function fetchFromFlickr() {
  const self = this;
  const query = self.props.params.query || '';
  console.log('query: ' + query);
  const options = {
    withCredentials: false,
    uri : 'http://localhost:3001/search?query=' + query,
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
