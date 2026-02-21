const pool=require("../db/db");

const apply={
    national_student:(data,callback)=>{
        const q=`insert into nationalstudentapply(name,email,number,class,parents_number) values("${data.name}","${data.email}","${data.number}","${data.class}","${data.parents_number}")`;
        pool.query(q,callback);
    },

    international_stundent:(data,callback)=>{
        const q=`insert into internationalstudenapply(name,email,birth_place,class,parent_email) values("${data.name}","${data.email}","${data.birthplace}","${data.class}","${data.parentemail}")`
        pool.query(q,callback);
    },
    admission:(data,callback)=>{
        const q=`insert into admission(name,email,birth_place,nationality,gender,dob,apply_for,last_institution,parent_name,parent_email) values('${data.name}','${data.email}','${data.birthplace}','${data.nationality}','${data.gender}','${data.dob}','${data.apply}','${data.last_school}','${data.parentname}','${data.parentemail}')`;
        pool.query(q,callback);
    },
}



module.exports=apply;

