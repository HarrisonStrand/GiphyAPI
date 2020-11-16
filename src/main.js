import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  
  $("#searchButton").click(function() {
    const gif = $('#search').val();
    $('search').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=${process.env.API_KEY}&limit=5`;
    
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $("ul#giphyPics").append(`<img src="${response.data[0].images.original.url}">`);
    }
  });

//////////////////-------------------------------------------------------------------------

  $("#trendButton").click(function() {
    
    let request2 = new XMLHttpRequest();
    const url2 = `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=5`;

    request2.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request2.open("GET", url2, true);
    request2.send();

    function getElements(response) {
      $("ul#trendyPics").append(`<img src="${response.data[0].images.original.url}">`);
    }
  });

  //////////////////-------------------------------------------------------------------------

  $("#randomButton").click(function() {

    let request3 = new XMLHttpRequest();
    const url3 = `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&limit=5`;

    request3.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request3.open("GET", url3, true);
    request3.send();

    function getElements(response) {
      $("ul#randomPics").append(`<img src="${response.data.images.original.url}">`);
    }
  });
});