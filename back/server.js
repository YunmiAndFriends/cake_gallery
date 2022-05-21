const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./libs/models");

const authRouter = require("./routes/auth");

dotenv.config();
const app = express();

app.use("/auth", authRouter);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("========데이터베이스 연결 성공했습니다.=======");
  })
  .catch((err) => {
    console.error(err);
  });

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
