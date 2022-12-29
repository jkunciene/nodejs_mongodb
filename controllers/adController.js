const asyncHandler = require('express-async-handler');

const Ad = require('../models/adModel');

// @desc Get goals
// @route GET /api/goals
// @access PRIVATE
const getAds = asyncHandler(async (req, res) => {
  const ads = await Ad.find({ user: req.user.id })
  res.status(200).json(ads)
})

// @desc Set ads
// @route POST /api/ads
// @access PRIVATE
const setAd = asyncHandler(async (req, res) => {
    if (!req.body.text || !req.body.description || !req.body.price) {
      res.status(400)
      throw new Error('Please add a required fields')
    }
    const ad = await Ad.create({
      text: req.body.text,
      description: req.body.description,
      price: req.body.price,
      user: req.user.id
    })
    res.status(200).json(ad)
  })

  // @desc Update goal
// @route PUT /api/goals/:id
// @access PRIVATE
const updateAd = asyncHandler(async (req, res) => {
  const ad = await Ad.findById(req.params.id)

  if (!ad) {
    res.status(400)
    throw new Error('Ad not found')
  }

  // check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure the logged in user matches the goal user
  if (ad.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updateAd = await Ad.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.status(200).json(updateAd)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access PRIVATE
const deleteAd = asyncHandler(async (req, res) => {
  const ad = await Ad.findById(req.params.id)

  if (!ad) {
    res.status(400)
    throw new Error('Ad not found')
  }

  // check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure the logged in user matches the goal user
  if (ad.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await ad.remove()

  res.status(200).json({ id: req.params.id })
})

  module.exports = {
    getAds,
    setAd,
    updateAd,
    deleteAd
  }