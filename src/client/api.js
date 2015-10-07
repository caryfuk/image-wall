import rp from 'request-promise';

export function fetchFromFlickr(query) {
  rp('http://localhost:3001/search?query=' + query)
    .then(function(response) {
        return JSON.parse(response);
      }
    )
    .catch(function(e) {
      console.error('Error loading response.');
    });
}
