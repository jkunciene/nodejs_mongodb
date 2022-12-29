const express = require('express');
const router = express.Router();

const {
    setAd, getAds,
} = require('../controllers/adController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getAds).post(protect, setAd);

module.exports = router;