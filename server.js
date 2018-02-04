require('dotenv').config();
var PORT=process.env.PORT;
var express = require('express');  // http server 
var app = express();

//app.listen(3000,function(){  // creates application server at port 3000 and has call back function
app.listen(PORT,function(){  
    console.log(`Server up and running ,i am on port ${PORT}`);
});

app.get('/',function(request,response){  //requires end point and function with request and reponse
   response.send("Hello world");
});