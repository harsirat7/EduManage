const adminModal = require("../Modal/admin");

class Auth {
    checkAdmin(req, res) {
        const data = {
            id: req.body.id,
        };

        adminModal.adminCheck(data, (err, result) => {
            if (err) {
                res.render("AdminProfile/adminLogIn", { err: "Error in Fetching data from DataBase" });
            }
            else {
                if (result.length == 0) {
                    res.render("AdminProfile/adminLogIn", { msg: "User Not Found" });
                }
                else {
                    if (result[0].password != req.body.password) {
                        res.render("AdminProfile/adminLogIn", { msg: "Incorrect Password" });
                    }
                    else {
                        req.session.admin_id = req.body.id;
                        res.redirect("/adminDashboard")
                    }
                }
            }
        });

    }


    loadDashboard(req, res) {

        if (!req.session.admin_id) {
            return res.render("AdminProfile/adminLogIn", {
                msg: "Please login here"
            });
        }

        const date = new Date().toLocaleDateString("en-CA");

        const data = { date };

        adminModal.Pthought(data, (err, thoughtRecord) => {

            if (err) {
                return res.render("AdminProfile/adminDashboard", {
                    err: "Error fetching thought"
                });
            }

            adminModal.notification((err, noticeResult) => {

                if (err) {
                    return res.render("AdminProfile/adminDashboard", {
                        err: "Error fetching notifications"
                    });
                }


                res.render("AdminProfile/adminDashboard", {
                    thought: thoughtRecord[0],
                    result: noticeResult
                });

            });

        });
    }


    loadAddAdmin(req, res) {
        if (!req.session.admin_id) {
            res.render("AdminProfile/adminLogIn", { msg: "Please Log In Here" });
        }
        else {
            res.render("AdminProfile/addAdmin");
        }
    }

    loadStudentList(req, res) {
        if (!req.session.admin_id) {
            res.render("AdminProfile/adminLogIn", { msg: "Please Log In Here" });
        }
        else {
            adminModal.studentList((err, records) => {
                if (err) {
                    res.render("AdminProfile/studentList", { err: "Error in Fetching Data from DataBase" });
                }
                else {
                    if (records.length == 0) {
                        res.render("AdminProfile/studentList", { err: "No Student Found" });
                    }
                    else {
                        res.render("AdminProfile/studentList", { msg: records });
                    }
                }
            });
        }
    }

    loadApplicationList(req, res) {
        if (!req.session.admin_id) {
            res.render("AdminProfile/adminLogIn", { msg: "Please Log In Here" });
        }
        else {
            adminModal.applicationList((err, records) => {
                if (err) {
                    res.render("AdminProfile/application", { err: "Error in Fetching Data from DataBase" });
                }
                else {
                    if (records.length == 0) {
                        res.render("AdminProfile/application", { err: "No Student Found" });
                    }
                    else {
                        res.render("AdminProfile/application", { msg: records });
                    }
                }
            });

        }



    }

}

class App extends Auth {

    addAdmin(req, res) {
        const data = {
            name: req.body.name,
            password: req.body.password,
            id: req.session.admin_id
        }

        adminModal.addAdmin(data, (err) => {
            if (err) {
                res.render("AdminProfile/addAdmin", { msg: "Error in adding New Admin in DataBase" });
            }
            else {
                res.render("AdminProfile/addAdmin", { msg: `Admin ${data.name} Added Successfully` });
            }
        });


    }

    thought(req, res) {
        if (!req.session.admin_id) {
            res.render("AdminProfile/adminLogIn", { msg: "Please Log In Here" });
        }
        else {
            if (req.method == "GET") {
                adminModal.thoughtDateCheck((err, result) => {
                    if (err) {
                        res.render("AdminProfile/thought", { error: "Error in fetching data from DataBase" });
                    }
                    else {
                        if (result.length == 0) {
                            res.render("AdminProfile/thought");
                        }
                        else {
                            res.render("AdminProfile/thought", { msg: "You have Already Wrote the Thought. By entering new , It will Update" });
                        }
                    }
                });
            }
            else {
                adminModal.deleteThought((err) => {
                    if (err) {
                        res.render("AdminProfile/thought", { error: "error in deleting previous Thought" });
                    }
                    else {
                        const date = new Date().toLocaleDateString("en-CA");
                        const data = {
                            date: date,
                            thought: req.body.Tinput
                        }
                        adminModal.Thought(data, (err) => {
                            if (err) {
                                res.render("AdminProfile/thought", { error: "Error in sending data to Database" });
                            }
                            else {
                                res.render("AdminProfile/thought", { msg: "Thought Updated Successfully" });
                            }
                        });
                    }
                });
            }
        }
    };

    notification(req, res) {
        if (!req.session.admin_id) {
            res.render("AdminProfile/adminLogIn", { msg: "Please Log In Here" });
        }
        else {
            if (req.method == "GET") {
                res.render("AdminProfile/notice");
            }
        }
    };



    addNotification(req, res) {
        if (!req.session.admin_id) {
            res.render("AdminProfile/adminLogIn", { msg: "Please Log In Here" });
        }
        else {
            if (req.method == "GET") {
                res.render("AdminProfile/notice", { error: "can't send data(GET method)" });
            }
            else {
                const data = {
                    notice: req.body.Tinput
                };
                adminModal.addNotificaton(data, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.render("AdminProfile/notice", { msg: "Notification published successfully" });
                    }
                });
            }
        }
    };




}

module.exports = new App();