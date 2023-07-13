var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    var fun=data.filter((element)=>element.population<200000).map((element)=>({name:element.name.common,population:element.population}));
    console.log(fun);
}
   
