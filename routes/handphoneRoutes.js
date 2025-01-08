const express = require("express")
const {
    getiphone,
    getoppo,
    getvivo,
    getxiomi,
    getpoco,
    inserthandphone,
    updateHandphone,
    deleteHandphone,
} = require("../controllers/handphoneControllers");

const router = express.Router();

router.get("/iphone", getiphone);
router.get("/oppo",getoppo);
router.get("/vivo",getvivo);
router.get("/xiomi",getxiomi);
router.get("/poco",getpoco);
router.get("/handphone/:store",inserthandphone);
router.put("/handphone/:store/:id",updateHandphone);
router.delete("/handphone/:store/:id",deleteHandphone);

module.exports = router;