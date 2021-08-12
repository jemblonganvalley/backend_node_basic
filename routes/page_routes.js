import express from "express";
const page = express.Router();

//login page
page.get("/", (req, res) => {
  res.render("main.html", { title: "login page" });
});

//register
page.get("/register", (req, res) => {
  res.render("register.html", { title: "register page" });
});

//dashboard
page.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "jvalley" });
});

export default page;
