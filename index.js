//import module yang dibutuhkan
import express from "express";
import cors from "cors";
import handlebars from "express-handlebars";
import path from "path";

//aliaskan app
const app = express();

//kita buat middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static/")));

// buat template engine
app.set("view engine", "html");
app.set("views", path.join(__dirname, "static/views/"));
app.engine(
  "html",
  handlebars({
    layoutsDir: path.join(__dirname, "static/views/layout"),
    partialsDir: path.join(__dirname, "static/views/components"),
    defaultLayout: "layout.html",
    extname: "html",
  })
);

// buat routing
app.get("/", (req, res) => {
  res.render("main.html");
});

app.listen(9000, () => {
  console.log("listen port 9000");
});
