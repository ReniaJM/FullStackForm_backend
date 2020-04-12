const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");


/**
 * @api POST /contact
 */
const User = require('../models/User');
router.post(
  "/contact",
  [
    check('first_name')
      .isLength({ min: 1 })
      .withMessage("First name is required")
      .trim(),
    check('last_name')
      .isLength({ min: 1 })
      .withMessage("Last  name is required")
      .trim(),
    check("email")
      .isEmail()
      .withMessage("That email doesn‘t look right")
      .bail()
      .trim()
      .normalizeEmail(),
    check("date")
      .isEmpty()
      .withMessage("Date is required")
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
    }

    const {email} =req.body;
    try {
      let  user  = await User.findOne({email});
      if(!user){
        return res
          .status(400)
          .json({errors: [{msg:"User already exist"}]});
      }
    }catch (err){
      console.log(err.message);
      res.status(500).send("server error")

    }

    let user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      date: req.body.date,
    });
    user.save()
  }
);

module.exports = router;





