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


router.get("/getRecentlyGallery", async (req, res) => {
  const newGalleryList = await Gallery.findAll({order: [["created_at", "DESC"]],limit:3})
  return res.send(newGalleryList)
});

router.get("/getAllGallery", async (req, res)=> {
    const allGalleryList = await Gallery.findAll({});
    return res.send(allGalleryList);
})

router.get("/getSelectGallery", async (req, res)=> {
    const { selectedId } =  req.query;
    const selectGallery = await Gallery.findOne({where: {id: selectedId}});
    if(selectGallery===null){
        return res.send("잘못된 URL 입니다.")
    }
    return res.send(selectGallery);
})

module.exports = router;
