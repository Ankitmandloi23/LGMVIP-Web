const express=require('express');
const app=express();


app.use(express.static("projects"));
app.get("/",function(request,response){
app.redirect("/index.html");
});

app.listen(5050,function(err){
if(err)
{
return console.log(err);
}
console.log('server is Ready to accept request on port 5050');
});
