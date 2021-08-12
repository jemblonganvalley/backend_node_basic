//import module yang dibutuhkan
import express from "express";
import cors from "cors";
import handlebars from "express-handlebars";
import path from "path";
import page from "./routes/page_routes";
import auth from "./routes/auth_routes";
import sequelize from "./model/connection";

//aliaskan app
const app = express();

//kita buat middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static/")));

//connection to database
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("konak to database");
  })
  .catch((err) => {
    console.log(err);
  });

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
app.use("/", page);
app.use("/api", auth);

app.listen(9000, () => {
  console.log("listen port 9000");
});
