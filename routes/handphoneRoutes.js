const express = require("express")
const {
    getIphone,
    getOppo,
    getVivo,
    getXiomi,
    getPoco,
    insertHandphone,
    updateHandphone,
    deleteHandphone,
} = require("../controllers/handphoneControllers");

const router = express.Router();

router.get("/iphone", getIphone);
router.get("/oppo",getOppo);
router.get("/vivo",getVivo);
router.get("/xiomi",getXiomi);
router.get("/poco",getPoco);
router.get("/handphone/:brand",insertHandphone);
router.put("/handphone/:brand/:id",updateHandphone);
router.delete("/handphone/:brand/:id",deleteHandphone);

module.exports = router;