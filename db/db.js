const MySql=require("mysql2");

const Pool=MySql.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"school_management",
    queueLimit:10,
    waitForConnections:true,
    multipleStatements:false
});

Pool.getConnection((err,connection)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connection ID : "+connection.threadId);
    }
});


module.exports=Pool;
