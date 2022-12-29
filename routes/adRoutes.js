const express = require('express');
const router = express.Router();

const {
    setAd,
} = require('../controllers/adController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, setAd);

module.exports = router;