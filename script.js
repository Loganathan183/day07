var request =  new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);

//a.get all the countries from asia continent/region using filter function
 var result_asia = res.filter((ele)=>ele.region == "Asia");
 console.log(result_asia)
 var country_names = result_asia.map((ele)=>ele.name);
 console.log(country_names);

 //b.get all the countries with the population of less than 2lakhs using filter function
 var popu = res.filter((ele)=>ele.population<200000);
console.log(popu);
var popu_res = popu.map((ele)=>ele.capital)
console.log(popu_res);

//c.print all the following details name,capital,flag using foreach function
var countryData=JSON.parse(this.response);
countryData.forEach((element)=>{
    console.log(element.name,element.capital,element.flag);
})

//d.print the total population of countires using reduce function
var total_popu = res.reduce((acc,cv)=>acc+cv.population,0)
console.log(total_popu);
}

//e.print the country that uses US dollars as currency
for(i=0;i<data.length;i++){
    if(data[i].currencies[0].code==="USD")
   {
       console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
   }
}