var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../config/db');
var SggMap = require('../models/sgg_map');

router.get('/', (req, res, next) => {
  var sd_cd = req.query.sd_cd;
  // console.log("sd_cd : ", sd_cd);
  SggMap.findOne({SD_CD: sd_cd}, (err, map) => {
    if (err) return next(err);
    res.json({
      success: true,
      result: map
    });
  });
});

module.exports = router;