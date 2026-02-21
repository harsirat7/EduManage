const pool = require("../db/db");

const adminModal = {
    adminCheck: (data, callback) => {
        const q = `select password from admin where id=?`;
        pool.query(q, [data.id], callback);
    },

    addAdmin: (data, callback) => {
        const q = `insert into admin(name,password,added_by) values(?,?,?)`;
        pool.query(q, [data.name, data.password, data.id], callback);
    },

    studentList: (callback) => {
        const q = `select id,roll_no,name,class,gender,dob,nationality,last_institution,phone_number,father_name,mother_name from students`;
        pool.query(q, callback);
    },

    applicationList: (callback) => {
        const q = "select *from application";
        pool.query(q, callback);
    },
    Pthought: (data, callback) => {
        const q = `select thought from daily_thought where thought_date=?`;
        pool.query(q, [data.date], callback);
    },
    thoughtDateCheck: (callback) => {
        const q = `select thought_date from  daily_thought where thought_date=CURDATE()`;
        pool.query(q, callback);
    },
    deleteThought: (callback) => {
        const q = `delete from daily_thought where thought_date=CURDATE()`;
        pool.query(q, callback);
    },
    Thought: (data, callback) => {
        const q = `insert into daily_thought(thought_date,thought) values(?,?)`;
        pool.query(q, [data.date, data.thought], callback);
    },
    addNotificaton: (data, callback) => {
        const q = `insert into notifications(body) values("${data.notice}");`
        pool.query(q, callback);
    },
    notification: (callback) => {
        const q = `select*from notifications where date = CURDATE()`;
        pool.query(q, callback);
    }

}

module.exports = adminModal;