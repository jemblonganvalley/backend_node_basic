import express from "express";
const auth = express.Router();
import multer from "multer";
import { User } from "../model/Model";

const form_data = multer();

//register
auth.post("/user_register", form_data.none(), (req, res) => {
  const data = req.body;

  //store data ke table user
  User.create(data)
    .then((result) => {
      if (result) {
        res.render("main", { success: true, msg: "berhasil register" });
      } else {
        res.send({
          success: false,
          msg: "gagal register",
        });
      }
    })
    .catch((err) => {
      res.send({
        succes: false,
        msg: "internal server error",
        error: err,
      });
    });
});

//login
auth.post("/user_login", form_data.none(), (req, res) => {
  const data = req.body;

  User.findOne({
    where: {
      email: data.email,
      password: data.password,
    },
  })
    .then((result) => {
      if (result) {
        res.send({
          succes: true,
          msg: "login berhasil",
        });
      } else {
        res.send({
          succes: false,
          msg: "login gagal",
        });
      }
    })
    .catch((err) => {
      res.send({
        succes: false,
        msg: "login gagal",
        error: err,
      });
    });
});

export default auth;
