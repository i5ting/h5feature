// var request = require('request');
// request('http://html5test.com/compare/feature/index.html', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Print the google web page.
//   }
// })


// Print all of the news items on Hacker News
var jsdom = require("jsdom");

jsdom.env({
  url: "http://html5test.com/compare/feature/index.html",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
    var $ = window.$;
    console.log("HN Links");
    $("table").each(function() {
      console.log(" -", $(this));
    });
  }
});