const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const User = require("../models/user");

const router = express.Router();

/* 존재하는 아이디인지에 대한 api 구현 */

router.post("/join", isNotLoggedIn, async (req, res, next) => {
  const { userkey, password, name, userType, email, mobile, birthday } =
    req.body;
  const birthInfo = birth.split("-");

  try {
    const exUser = await User.findOne({
      where: { userkey: userkey },
    });
    /* 유저 존재 유무 확인, 없을 시 회원가입 */
    return res.redirect("/auth/login");
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    console.log("----------/login auth", passport.count++);
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect("/");
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
