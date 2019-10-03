var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8000;

// Create application / json parser
var jsonParser = bodyParser.json()

// Create application  
var urlencodedParser = bodyParser.urlencoded({ extended: false})

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/++json' }))

app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// Parse an HTML into a string
app.use(bodyParser.text({ type: 'text/html' }))

app.listen(PORT, function(){
    console.log("App listening on PORT:" + PORT);
});