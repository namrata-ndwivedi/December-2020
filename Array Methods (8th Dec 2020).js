/*JS Refresh
Content
For each
map
filter
reduce 
some 
find 
every

Solving problems using array functions on rest countries data.
 - Get all the countries from Asia continent /region using Filter function 
- Get all the countries with population of less than 2 lacs using Filter function
 - Print the following details name, capital, flag using forEach function 
- Print the total population of countries using reduce function 
- Print the country which use US Dollars as currency.

Meeting Recording: https://us02web.zoom.us/rec/share/ts39shZMpYCn5v64bwTlp0uvX4PzDWh1YoD3ofHCNi6FS5Va-tFOC4VTnqUpCURA.8HdKL5mL905mWrZs Access Passcode: B7m@fiat

Session link: https://us02web.zoom.us/meeting/register/tZ0rdeytqjsuEt1VduXI3ri0R5ntjUiUajKJ Passcode : guvi
*/


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
    //for(let i in data){
    //    console.log(data[i].flag);
    //}
    //total popn?
    /*for(let i in data){
        let popn = data[i].population;
        sum += popn; 
    }
    console.log(sum);*/
    console.log(data);

    //1. Get all the countries from Asia continent /region using Filter function
    var result = data.filter((country, index, arr) => {
        if(arr[index].region === 'Asia'){
            return country.name;
        }
    });
    console.log(result);

    //2. - Get all the countries with population of less than 2 lacs using Filter function
    var result2 = data.filter((country, index, arr) => {
        if(arr[index].population < 200000){
            return country.name;
        }
    });
    console.log(result2);

    //3.  - Print the following details name, capital, flag using forEach function 
    data.forEach((country) => {
        console.log(country.name);
        console.log(country.capital);
        console.log(country.flag);    
    });

    //4. - Print the total population of countries using reduce function 
    //first as reduce function works with array extract that particulat propety of popln and create an array
    let values = [];
    for(let i in data){
        values[i] = data[i].population;
    }
    console.log(values);

    //now use reduce() as usual
    let result = values.reduce((total, current) => {
        return total + current;
    });
    console.log(result);      //7349137231

    //5. Print the country which use US Dollars as currency.
    let values = [];
    for(let i in data){
        for(let j in data[i].currencies){
            if(data[i].currencies[j].name === 'United States dollar'){
                values.push(data[i].name);
            }
        }
    }
    console.log(values);
}
