
const pool=require("../db/db");

const check_auth={
    check_std:(data,callback)=>{
        const q=`select id,name,password from students where id=?`;
        pool.query(q,[data.admno],callback);
    },

    check_old_password:(data,callback)=>{
        const q=`select password from students where id=?`;
        pool.query(q,[data.id],callback);
    },

    change_password:(data,callback)=>{
        const q=`update students set password=? where id=?`;
        pool.query(q,[data.newp,data.id],callback);
    },

    student_details:(data,callback)=>{
        const q=`select * from students where id=?`
        pool.query(q,[data.id],callback);
    },

    application:(data,callback)=>{
        const q=`insert into application(id,name,subject,body) values(?,?,?,?)`;
        pool.query(q,[data.id,data.name,data.subject,data.body],callback);
    },

    attenddance:(data,callback)=>{
        const q=`select count(*) as total , (select count(student${data.id}) from attendance where student${data.id}="P") as present,(select count(student${data.id}) from attendance where student${data.id}="A") as absents from attendance`;
        pool.query(q,callback);
    },

    Pthought:(data,callback)=>{
        const q=`select thought from daily_thought where thought_date=?`;
        pool.query(q,[data.date],callback);
    }

}

module.exports=check_auth;