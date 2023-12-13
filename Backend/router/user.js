const router = require("express").Router();
const User = require("../Modals/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWTSEC = "#2@!@$ndja45883 r7##";

router.post("/create/user",
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('username').isLength({ min: 5 }),

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ message: "Please login with correct password" });
            }
            const salt = await bcrypt.genSalt(10);
            const secpass = await bcrypt.hash(req.body.password, salt)

            user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: secpass,
                profile: req.body.profile,
                phonenumber: req.body.phonenumber
            });

            const accessToken = jwt.sign({
                id:user._id,
                username:user.username
            }, JWTSEC)
            
            await user.save();
            res.status(200).json({user, accessToken});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal error occurred" });
        }
    });

module.exports = router;
