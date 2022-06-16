const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const User = require("../../libs/models/user");
const Gallery = require("../../libs/models/gallery");
const ReviewPost = require("../../libs/models/reviewPost")

const router = express.Router();

/* 존재하는 아이디인지에 대한 api 구현 */

router.post("/join", isNotLoggedIn, async (req, res, next) => {
  console.log("join : ", req.body);
  const { userkey, password, name, userType, email, mobile, birthday } =
    req.body;

  try {
    const exUser = await User.findOne({
      where: { userKey: userkey },
    });
    /* 유저 존재 유무 확인, 없을 시 회원가입 */
    console.log("exUser확인 : ", exUser);
    if (exUser !== null) {
      return res.send("잘못된 정보입니다.");
    }
    const hash = await bcrypt.hash(password, 12);
    try {
      await User.create({
        userKey: userkey,
        password: hash,
        name: name,
        birthday: birthday,
        user_type: userType,
        email: email,
        mobile: mobile,
      });
    } catch (err) {
      console.log("createError: ", err);
      return res.send("create Error");
    }
    return res.send("ok");
  } catch (error) {
    console.error("존재하는 회원인지 확인: ", error);
    return res.send("user Error");
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  console.log("req.body: ", req.body);
  passport.authenticate("local", (authError, user, info) => {
    console.log("----------/login auth", passport.count++);
    if (authError) {
      console.error(authError);
      return res.send(info.message);
    }
    if (!user) {
      return res.send(info.message);
    }
    return req.login(user, async (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      if(user.userType==="director"){
        const galleryData = await Gallery.findAll({where: {userKey: user.userKey}})
        if(galleryData.length){
          return res.send("ok");
        }else{
         return res.send("open");
        }
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

// 전체 후기 포스트
router.get("/getReviewList", async(req, res) => {
  try {
    console.log("\n\ngetAllReviewPost")
  const allReviewPostList = await ReviewPost.findAll({
    order: [["created_at", "DESC"]],
  });
  console.log("\n\nget:", allReviewPostList)
  return res.send(allReviewPostList);
  } catch (error) {
    console.log("왜 안돼? ", error)
  }
});

// 후기 포스팅 열람
router.get("/readReviewPost", async (req, res) => {
  const { selectedId } = req.query;
  console.log("\n\n\n\nselectedId", selectedId)
  const selectReviewPost = await ReviewPost.findOne({
    where: { id: selectedId },
  });
  console.log("selectReviewPost", selectReviewPost)

  if (selectReviewPost === null) {
    return res.send("\n\n\n\n잘못된 URL 입니다.");
  }
  return res.send(selectReviewPost);
});

module.exports = router;
