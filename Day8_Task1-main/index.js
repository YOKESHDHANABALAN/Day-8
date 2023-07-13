var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    var fun=data.filter((element)=>element.region==="Asia").map((element)=>({name:element.name.common,region:element.region}));
    console.log(fun);
    }
    
 
