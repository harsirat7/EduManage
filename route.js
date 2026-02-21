const express = require("express");
const router = express.Router();
const apply_controller = require("./Controller/applyController");
const std_obj = require("./Controller/studentController");
const admin_obj = require("./Controller/adminController");


router.get("/", (req, res) => {
    res.render("home");
});

router.post('/national_form', (req, res) => {
    apply_controller.national_std(req, res);
});

router.post("/international_form", (req, res) => {
    apply_controller.international_std(req, res);
});


router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/achievements", (req, res) => {
    res.render("achievements");
});

router.get('/academic', (req, res) => {
    res.render('academic');
});

router.get("/admission", (req, res) => {
    res.render("admission");
});

router.post('/admission_form', (req, res) => {
    apply_controller.admission(req, res);
});

router.get("/contact_us", (req, res) => {
    res.render("contact");
});

router.get("/Login", (req, res) => {
    res.render("StudentProfile/login");
});

router.use("/slogin", (req, res) => {
    std_obj.check_Std(req, res);
});

router.use("/dashboard", (req, res) => {
    std_obj.std_dashboard(req, res);
});

router.use("/logout", (req, res) => {
    std_obj.logout(req, res);
});

router.use("/changepassword", (req, res) => {
    std_obj.load_change_password(req, res);
});

router.use("/changepassw", (req, res) => {
    std_obj.change_password(req, res);
});

router.use("/application", (req, res) => {
    std_obj.load_application(req, res);
});

router.use("/student_application", (req, res) => {
    std_obj.application(req, res);
});

router.use('/profile', (req, res) => {
    std_obj.load_profile(req, res);
});

router.use("/attendance", (req, res) => {
    std_obj.load_attendance(req, res);
});


router.use("/adminpanel", (req, res) => {
    res.render("AdminProfile/adminLogIn");
});

router.use("/adminLog", (req, res) => {
    admin_obj.checkAdmin(req, res);
});

router.use("/adminDashboard", (req, res) => {
    admin_obj.loadDashboard(req, res);
});

router.use("/addAdmin", (req, res) => {
    admin_obj.loadAddAdmin(req, res);
});

router.use("/addnewadmin", (req, res) => {
    admin_obj.addAdmin(req, res);
});

router.use('/studentList', (req, res) => {
    admin_obj.loadStudentList(req, res);
});

router.use("/applicationList", (req, res) => {
    admin_obj.loadApplicationList(req, res);
});

router.use('/thought', (req, res) => {
    admin_obj.thought(req, res);
});


router.use('/notification', (req, res) => {
    admin_obj.notification(req, res);
});

router.use("/pushnotice", (req, res) => {
    admin_obj.addNotification(req, res);
});

module.exports = router;