import express from "express";
const auth = express.Router();
import multer from "multer";

const form_data = multer();

//register
auth.post("/user_register", form_data.none(), (req, res) => {
  const data = req.body;

  simpan.push(data);

  res.render("register.html", { msg: "berhasil register" });
});

//login
auth.post("/user_login", form_data.none(), (req, res) => {
  const data = req.body;
});

export default auth;
