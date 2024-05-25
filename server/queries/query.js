const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DATABASE
});

con.connect((err)=>{
    if(err) console.log(err)
});

exports.checkUser = (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;

    con.query("SELECT * from user_details WHERE email=?",[email],(err,result)=>{
        console.log(result[0]);
    })
}