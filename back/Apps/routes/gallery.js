const express = require("express");
const { isLoggedIn } = require("./middlewares");
const Gallery = require("../../libs/models/gallery");


const router = express.Router();

router.post("/registerGallery", isLoggedIn, async (req, res, next) => {
  console.log("registerGallery : ", req.body)
  const { name, add, intro, img } = req.body;
  const userInfo = req.user;
  console.log("user: ", userInfo.userKey)
  try {
    await Gallery.create(
      {
        name: name,
        address: add,
        introduction: intro,
        imgUrl: img,
        userKey: userInfo.userKey,
      }
    );
  } catch (err) {
    console.log("\n\nregisterGallery createError: ", err)
    return res.send("create Error");
  }    
  return res.send("ok");
});


// router.get("/logout", isLoggedIn, (req, res) => {
//   req.logout();
//   req.session.destroy();
//   res.send("ok");
// });

module.exports = router;
