const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const User = require("../../libs/models/user");


const router = express.Router();

/* 존재하는 아이디인지에 대한 api 구현 */

router.post("/join", isNotLoggedIn, async (req, res, next) => {
  console.log("join : ", req.body)
  const { userkey, password, name, userType, email, mobile, birthday } = req.body;

  try {
    const exUser = await User.findOne({
      where: { userkey: userkey },
    });
    /* 유저 존재 유무 확인, 없을 시 회원가입 */
    console.log("exUser확인 : ", exUser)
    if (exUser !== null) {
      return res.send("잘못된 정보입니다." );
    }
    const hash = await bcrypt.hash(password, 12);
    try {
      await User.create(
        {
          userkey: userkey,
          password: hash,
          name: name,
          birthday: birthday,
          user_type: userType,
          email: email,
          mobile: mobile,
        }
      );
    } catch (err) {
      console.log("createError: ", err)
      return res.send("create Error");
    }    
    return res.send("ok");
  } catch (error) {
    console.error("존재하는 회원인지 확인: ", error);
    return res.send("user Error");
  }
});

router.post("/login",isNotLoggedIn, (req, res, next) => {
  console.log("req.body: ", req.body)
  passport.authenticate('local', (authError, user, info) => {
    console.log("----------/login auth", passport.count++);
    if (authError) {
      console.error(authError);
      return  res.send(info.message);
    }
    if (!user) {
      return res.send(info.message);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.send("ok");
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;
