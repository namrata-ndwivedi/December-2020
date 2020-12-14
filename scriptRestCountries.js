//create a request variable 
var request = new XMLHttpRequest();

//open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//send the request
request.send();

var sum = 0;
//load the response once its ready
request.onload = function(){
    var data = JSON.parse(this.response);
    data.forEach((elt) => console.log(elt.flag));
}