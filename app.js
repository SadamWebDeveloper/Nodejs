const express =  require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000 ;


app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(bodyParser.json());

//below code for common static files like images css 
app.use(express.static("public"));

//template engine css html files for styling
const handlebars = exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");

// creating Router
app.get('/',(req,res)=>{
    res.render("home");
});


// listen port
app.listen(port,()=>{
    console.log('checking port :'+port);
});
