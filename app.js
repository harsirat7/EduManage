const express = require("express");
const app = express();
const path = require("path");
const port = 3001;
const useRouter = require("./route");
const session = require("express-session");


app.set("view engine", "ejs");
app.set("Views", path.join(__dirname, "views"));
app.use(express.static("Public"));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "student_id",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 10
    }
}));
app.use(session({
    secret: "admin_id",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 15
    }
}));


app.use("/", useRouter);

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});