const stdmodal = require("../Modal/student");
const adminModal = require("../Modal/admin");

class Auth {
    check_Std(req, res) {
        const data = {
            admno: req.body.admission_number,
            passw: req.body.password
        }

        stdmodal.check_std(data, (err, records) => {
            if (err) {
                res.render('StudentProfile/login', { err: "Error in fetching data from DataBase" });
            }
            else {
                if (records.length > 0) {
                    if (req.body.password == records[0].password) {
                        req.session.student_id = req.body.admission_number;
                        res.redirect("/dashboard");
                    }
                    else {
                        res.render('StudentProfile/login', { msg: "incorrect Password" })
                    }
                }
                else {
                    res.render("StudentProfile/login", { msg: "Student Not Found" });
                }
            }
        });

    };


    std_dashboard(req, res) {
        if (!req.session.student_id) {
            res.render("StudentProfile/login", { msg: "Please login here" });
        }
        else {
            const date = new Date().toLocaleDateString("en-CA")
            console.log(date);
            const data = {
                date: date,
            };
            adminModal.Pthought(data, (err, thoughtRecord) => {

                if (err) {
                    return res.render("StudentProfile/studentDashboard", {
                        err: "Error fetching thought"
                    });
                }

                adminModal.notification((err, noticeResult) => {

                    if (err) {
                        return res.render("StudentProfile/studentDashboard", {
                            err: "Error fetching notifications"
                        });
                    }


                    res.render("StudentProfile/studentDashboard", {
                        thought: thoughtRecord[0],
                        result: noticeResult
                    });

                });

            });
        }
    }

    logout(req, res) {
        if (!req.session.student_id) {
            res.render("StudentProfile/login", { msg: "Please login here" });
        }
        else {
            req.session.destroy();
            res.render("StudentProfile/login", { msg: "LogOut successfully" });
        }
    }

    load_change_password(req, res) {
        if (!req.session.student_id) {
            res.render("StudentProfile/login", { msg: "Please login here" });
        }
        else {
            res.render("StudentProfile/changePassword");
        }
    }

    change_password(req, res) {
        if (!req.session.student_id) {
            res.render("StudentProfile/login", { msg: "Please login here" });
        }
        else {
            if (req.method == "GET") {
                res.render("StudentProfile/changepassword", { err: "Error in submitting form. Contact Admin (data sent in GET Method)" });
            }
            else {
                if (req.body.newpassword != req.body.confirmpassword) {
                    res.render("StudentProfile/changepassword", { msg: "Password Mismatch" });
                }
                else {
                    const data = {
                        id: req.session.student_id
                    }

                    stdmodal.check_old_password(data, (err, record) => {
                        if (err) {
                            res.render("StudentProfile/changepassword", { err: "Error in Fetchind Data from DataBase. Contact Admin" });
                        }
                        else {
                            if (!record.length > 0) {
                                res.render("StudentProfile/changepassword", { err: "Error in Fetchind Data from DataBase. Contact Admin" });
                            }
                            else {
                                if (record[0].password != req.body.oldpassword) {
                                    res.render("StudentProfile/changepassword", { msg: "Old Password is incorrect" });
                                }
                                else {
                                    const data = {
                                        id: req.session.student_id,
                                        newp: req.body.newpassword
                                    };
                                    stdmodal.change_password(data, (err) => {
                                        if (err) {
                                            res.render("StudentProfile/changepassword", { err: "Error in changing password.Contact Admin" });
                                        }
                                        else {
                                            if (!req.session.student_id) {
                                                res.render("StudentProfile/login", { msg: "Please login here" });
                                            }
                                            else {
                                                res.render("StudentProfile/changepassword", { msg: "Password changed Successfully" })
                                            }

                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            };
        }
    }
}

class app extends Auth {
    load_application(req, res) {
        if (!req.session.student_id) {
            res.render("StudentProfile/login", { msg: "Please login here" });
        }
        else {
            const data = {
                id: req.session.student_id
            }
            stdmodal.student_details(data, (err, records) => {
                if (err) {
                    console.log(err);
                }
                else {
                    if (!records.length > 0) {
                        res.render("StudentProfile/application", { err: "Error in fetching data from DataBase.Contact Admin" });
                    }
                    else {
                        res.render("StudentProfile/application", { date: new Date().toDateString(), name: records[0].name });
                    }
                }
            });
        }
    }

    application(req, res) {
        if (!req.session.student_id) {
            res.render("StudentProfile/login", { msg: "Please login here" });
        }
        else {
            const data = {
                id: req.session.student_id
            };
            stdmodal.student_details(data, (err, records) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const data = {
                        id: req.session.student_id,
                        name: records[0].name,
                        subject: req.body.subject,
                        body: req.body.body
                    };
                    stdmodal.application(data, (err) => {
                        if (err) {
                            console.log(err);
                            res.render("StudentProfile/application", { err: "Error in sending data to DataBase.Contact Admin" });
                        }
                        else {
                            res.render("StudentProfile/application", { success: "Application Submitted Successfully", date: new Date().toDateString(), name: records[0].name });
                        }
                    });
                }
            });
        }
    }

    load_profile(req, res) {
        if (!req.session.student_id) {
            res.render("StudentProfile/login", { msg: "Please login here" });
        }
        else {
            const data = {
                id: req.session.student_id
            };

            stdmodal.student_details(data, (err, records) => {
                if (err) {
                    res.render("StudentProfile/login", { err: "Error in fetching Data from DataBase" });
                }
                else {
                    // console.log(records);
                    const recd = records[0];
                    res.render("StudentProfile/profile", { record: recd });
                }
            });
        }
    }

    load_attendance(req, res) {
        if (!req.session.student_id) {
            return res.render("StudentProfile/login", { msg: "Please login here" });
        }

        const data = {
            id: req.session.student_id
        };

        stdmodal.attenddance(data, (err, record) => {

            if (err) {
                res.render("StudentProfile/attendance", { err: "Error in fetching data from database" });
            }
            else {
                if (!record || record.length == 0) {
                    res.render("StudentProfile/attendance", { err: "No attendance record found" });
                }
                else {
                    const row = record[0];

                    const percentage = ((row.present / row.total) * 100).toFixed(2);

                    const records = {
                        total: row.total,
                        present: row.present,
                        absent: row.absents,
                        pert: percentage + "%"
                    };
                    res.render("StudentProfile/attendance", { re: records });
                }
            }
        });
    }

}



module.exports = new app;