const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout:"main"}));
app.set('view engine', 'handlebars');

const router = require("./controllers/burgers_controller.js");
app.use(router);

app.listen(PORT, function() {
    console.log("Listening on http://localhost: " + PORT);
});