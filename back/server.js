const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./libs/models");
const path = require("path");
const cors = require('cors');
const session = require("express-session");
const morgan = require("morgan");
const passport = require("passport");
const bodyParser = require('body-parser')
const ejs = require("ejs");
const app = express();


const authRouter = require("./Apps/routes/auth");
const galleryRouter = require("./Apps/routes/gallery");
const passportConfig = require("./Apps/passport/index");


dotenv.config();
passportConfig(); // 패스포트 설정
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(morgan());
const corsOptions = {
  origin: "*",
  credentials: true
}
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(passport.initialize()); // req 객체에 possprot 설정
app.use(passport.session()); // req.session 객체에 passport 정보 저장


app.use("/auth", authRouter);
app.use("/gallery", galleryRouter);




sequelize
  .sync({ force: false })
  .then(() => {
    console.log("========데이터베이스 연결 성공했습니다.=======");
  })
  .catch((err) => {
    console.error(err);
  });



app.set("port", process.env.PORT || 5500);



app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
