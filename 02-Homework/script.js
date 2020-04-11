$(document).ready(function(){

    var cityName = "Phoenix"
   
    var APIKey = "b15de476a69f8fe1bfef4d5af2fb20a4";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;

    var queryURL2 = "https://pro.openweathermap.org/data/2.5/month?q=" + cityName + "&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
  
          console.log(queryURL);
  
          console.log(response);
         
          $(".city").html("<h1>" + response.city.name + " date from moment.js</h1>");
         
          $(".wind").text("Wind Speed: " + response.list[0].wind.speed + " MPH");
          
          $(".humidity").text("Humidity: " + response.list[0].main.humidity + " %");
          
          var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
  
          $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
  
          console.log("Wind Speed: " + response.wind.speed);
          console.log("Humidity: " + response.main.humidity);
          console.log("Temperature (F): " + tempF);
  
         
        });
       
        $.ajax({
            url: queryURL2,
            method: "GET"
          })
            .then(function(response) {
      
              console.log(queryURL2);
      
              console.log(response);
             
              $(".uv").text("UV Index: ");
             
             
            });
































    
})