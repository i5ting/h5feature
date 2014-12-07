var request = require('request');
request('http://html5test.com/compare/feature/index.html', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})