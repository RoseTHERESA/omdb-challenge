var express = require('express'),
app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.redirect("search")
})




app.listen(3000, function (){
  console.log("Server on localhost:3000")
})