const express =  require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000 ;

//big topic need to understand
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
/*
the below code is for small project here we are going to practice in real project we include it in comtroller file
// mySQL connection 
const con = mysql.createPool({
    connectionLimit :10,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    user : process.env.DB_USER,
    password : process.env.DB_PASS
});

// check database connection 
con.getConnection((err,connection)=>{
    if(err) throw err
    console.log("DB connection successfully");
});
*/


/*
// creating Router
app.get('/',(req,res)=>{
    res.render("home");
});
*/

// declearing route to app.json
const routes=require("./server/routes/customers");
app.use('/',routes);

// listen port
app.listen(port,()=>{
    console.log('checking listen port :'+port);
});
