

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    var sum=data.map((element)=>element.population).reduce((sum,res)=>sum+res,0);
    console.log("Total population=",sum);
}