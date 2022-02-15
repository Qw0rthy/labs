request=require('request');

const url="http://api.weatherstack.com/current?access_key=5d1d888a6ad14a2338c27f0530b2138e&query=New%20York";

request({url:url},(err,response)=>{
    const data=JSON.parse(response.body);
  
    console.log("The current temperatrue is ",data.current.temperature);
    console.log("Country is",data.location.country);
   
});
