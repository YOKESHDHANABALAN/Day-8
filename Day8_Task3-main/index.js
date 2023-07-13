var request= new XMLHttpRequest();
request.open("GET",'https://restcountries.com/v3.1/all', true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    data.forEach(element => {
        console.log("country name: ",element.name.common,"  country capital: ",element.capital,"country flags: ",element.flags);
    });
}
