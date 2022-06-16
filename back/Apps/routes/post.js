const express = require("express");
const { isLoggedIn } = require("./middlewares");
const Gallery = require("../../libs/models/gallery");
const User = require("../../libs/models/user");
const GalleryPost = require("../../libs/models/galleryPost");
const ReviewPost = require("../../libs/models/reviewPost");
const { gallery } = require("../../libs/models");

const router = express.Router();

// 전체 갤러리들의 업로드 포스트 중 최신 3개
router.get("/getRecentlyGalleryPost", async (req, res) => {
  const recentlyPostList = await GalleryPost.findAll({
    order: [["created_at", "DESC"]],
    limit: 3,
  });
  return res.send(recentlyPostList);
});

// 전체 갤러리들의 업로드 포스트
router.get("/getAllGalleryPost", async (req, res) => {
  console.log("\n\nssdsd")

  const allGalleryPostList = await GalleryPost.findAll({
    order: [["created_at", "DESC"]],
  });
  console.log("\n\nallGalleryPostList", allGalleryPostList)

  return res.send(allGalleryPostList);
});

// 갤러리 측 포스팅 추가
router.get("/createGalleryPosting", isLoggedIn, async (req, res) => {
  const { title, aontent, img } = req.body;
  const userInfo = req.user;
  const writerInfo = await Gallery.findOne({
    where: { userKey: userInfo.userKey },
  });

  if (writerInfo === null) {
    return res.send("접근 권한이 없습니다.");
  } else {
    try {
      await GalleryPost.create({
        title: title,
        content: aontent,
        imgUrl: img,
        writer: writerInfo.get().name,
      });
    } catch (err) {
      console.log("\ncreateGalleryPosting createError: ", err);
      return res.send("오류로 인하여 업로드에 실패했습니다. 재시도 바랍니다.");
    }
    return res.send("ok");
  }
});

// 갤러리 측 포스팅 열람
router.get("/readGalleryPost", async (req, res) => {
  const { selectedId } = req.query;
  const selectGalleryPost = await GalleryPost.findOne({
    where: { id: selectedId },
  });
  if (selectGalleryPost === null) {
    return res.send("잘못된 URL 입니다.");
  }
  return res.send(selectGalleryPost);
});

// 전체 후기 포스트 중 최신 3개
router.get("/getRecentlyReviewPost", async (req, res) => {
  const recentlyPostList = await ReviewPost.findAll({
    order: [["created_at", "DESC"]],
    limit: 3,
  });
  return res.send(recentlyPostList);
});

// 후기 포스팅 추가
router.get("/createReviewPosting",isLoggedIn, async (req, res) => {
  const { title, aontent, img, storeName, writer} = req.body;
  const storeInfo = await Gallery.findOne({ where: { name: storeName } });

  if (storeInfo === null) {
    return res.send("존재하지 않는 가게입니다.");
  } else {
    try {
      await ReviewPost.create(
        {
          title: title,
          content: aontent,
          imgUrl: img,
          writer: writer,
          storeName: storeInfo.get().storeName
        }
      );
      const recvData = await ReviewPost.create({
        title: title,
        content: aontent,
        imgUrl: img,
        writer: userKey,
        storeName: storeInfo.get().storeName,
      });
      console.log("aaaa", recvData);
    } catch (err) {
      console.log("\ncreateGalleryPosting createError: ", err);
      return res.send("오류로 인하여 업로드에 실패했습니다. 재시도 바랍니다.");
    }
    return res.send("ok");
  }
});



// 전체 후기 포스트
router.get("/getReviewList", (req, res) => {
  res.send('ok')
  
});

module.exports = router;
