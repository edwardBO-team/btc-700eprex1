function addVisitorModule(){    
  var isoCode;
  $.getJSON("https://mamaya.online/geo", function(data) {
      isoCode = data.country_code;
      countryGeo = data.country
      currency()
    });
  function currency(){
    $(".country-name-geo").text(countryGeo)
    var currency1 = ["AT","CH","DE","LI","LU","BE","CZ","ES","FR","GR","HU","IT","NL","PL","PT","RO","RS","HR","SK","SL","DK","FI","NO","SE"]
    if(isoCode == "GB"){
      $(".currency").text("£");
      $('.currency-text').text('libra');
      $('.currency-iso').text('GBP');
        return true
    }
    if(currency1.indexOf(isoCode)>=0){
      $(".currency").text("€")
      $('.currency-text').text('eur');
      $('.currency-iso').text('EUR');
      }
    else{
      $(".currency").text("$")
      $('.currency-text').text('dolárov');
      $('.currency-iso').text('USD');
    }
  }
};
addVisitorModule()