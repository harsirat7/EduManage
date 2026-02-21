const apply_modal = require("../Modal/apply");

class apply {
    national_std(req, res) {
        let data = {
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            class: req.body.class_apply,
            parents_number: req.body.parent_number
        };

        apply_modal.national_student(data, (err) => {
            if (err) {
                res.send("Error in sending data to Database:" + err);
            }
            else {
                res.render("home");
            }
        });

    }

    international_std(req, res) {
        let data = {
            name: req.body.name,
            email: req.body.email,
            birthplace: req.body.birth_place,
            class: req.body.class_apply,
            parentemail: req.body.parent_email
        };

        apply_modal.international_stundent(data, (err) => {
            if (err) {
                res.send("Error in sending data to DataBase:" + err);
            }
            else {
                res.render('home');
            }
        });
    }

    admission(req, res) {
        let data = {
            name: req.body.name,
            birthplace: req.body.birthplace,
            gender: req.body.gender,
            apply: req.body.apply,
            parentname: req.body.parentname,
            email: req.body.email,
            nationality: req.body.nationality,
            dob: req.body.dob,
            last_school: req.body.last_school,
            parentemail: req.body.parentemail
        };
        apply_modal.admission(data, (err) => {
            if (err) {
                console.log(err);
                res.render('admission', { msg: "Error in sending Data to DataBase" });
            }
            else {
                res.render('admission', { msg: "We will Contact You Soon!!" });
            }
        });

    }
}

module.exports = new apply();