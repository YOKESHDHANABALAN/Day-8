var request= new XMLHttpRequest();
request.open("GET",'https://restcountries.com/v3.1/all', true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
 var fun=data.filter((element)=>element.currencies && element.currencies.USD).map((element)=>({name:element.region,currencies:element.currencies.USD.name}));
    for(let i=0;i<fun.length;i++){
        console.log(fun[i]);
    }
}