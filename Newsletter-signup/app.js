
const express = require('express');

const https = require('https');

const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

const request=require('request');

app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/", function(req, res){

    const first =req.body.FirstName
    const last= req.body.LastName
    const email = req.body.Email;


    const data={
        members:[
            { 
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME: first,
                    LNAME: last
                }
            }
        ]
    };

    const jsonData=JSON.stringify(data);

    const url="https://us14.api.mailchimp.com/3.0/lists/2bfb122767"
    
    const options={
        method: 'POST',
        auth:"Pranit:9b68c765b0c11ccad37c6bee04466a74-us14"
    }

    const request1= https.request(url,options,function(response){

        response.on('data',function(data){
            console.log(JSON.parse(data))
        })
        
        const status=response.statusCode;
        if(status==200){
            res.sendFile(__dirname+"/sucess.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }
        
    })
    request1.write(jsonData);
    request1.end();
})

app.post('/failure',function(req,res){
    res.redirect("/");
}) 

app.listen(process.env.PORT ||3000,function(){
    console.log("Running server on port 3000")
})

// API KEYS
// 9b68c765b0c11ccad37c6bee04466a74-us14

// Audience ID
// 2bfb122767