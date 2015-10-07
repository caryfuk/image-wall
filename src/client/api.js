import rp from 'request-promise';

export function fetchFromFlickr() {
  const self = this;
  const query = self.props.params.query || '';
  console.log(query);
  rp('http://localhost:3001/search?query=' + query)
    .then(function(response) {
        self.setState({photos: JSON.parse(response)});
      }
    )
    .catch(function(e) {
      console.error('Error loading response.');
    });
}
