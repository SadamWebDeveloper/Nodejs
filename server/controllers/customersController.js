const mysql = require("mysql");


const con = mysql.createPool({
    connectionLimit :3,
    host : process.env.DB_HOST,
    database : process.env.DB_NAME,
    user : process.env.DB_USER,
    password : process.env.DB_PASS
});



exports.view=(req,res)=>{

    con.getConnection((err,connection)=>{
        if(err) throw err
      
        connection.query("select * from details",(err,rows)=>{
        connection.release();
        if(!err){
          
             res.render("home",{rows});

        }else{
            console.log("something wrong "+err);
        }

        });
    });
 };

 exports.addUser=(req,res)=>{
    console.log(res);
    res.render("addUser");
 };
 exports.save=(req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        const {name,age,address,phone}=req.body;
      
        connection.query("insert into details (name,age,address,phone) values (?,?,?,?)",[name,age,address,phone],(err,rows)=>{
        connection.release();
        if(!err){
          
            res.render("addUser");

        }else{
            console.log("something wrong "+err);
         
        }

        });
    });
 };