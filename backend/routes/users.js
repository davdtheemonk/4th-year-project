const router = require("express").Router();

let { User, validate, validateLogin } = require("../models/user.model");
const Admin = require("../models/admin.model");
const Reporter = require("../models/reporter.model");
const Police = require("../models/police.model");
let bcrypt = require("bcrypt");
let authtoken = require("../middleware/authToken");

router.route("/auth/register").post(async (req, res) => {
  try {
    console.log(req.body);
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already exists" });
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newuser = await new User({
      ...req.body,
      password: hashPassword,
    }).save();
    if (newuser.accounttype === "reporter") {
      await new Reporter({
        user: newuser._id.toString(),
      }).save();
    }
    if (newuser.accounttype === "admin") {
      await new Admin({
        user: newuser._id.toString(),
      }).save();
    }
    if (newuser.accounttype === "police") {
      await new Police({
        user: newuser._id.toString(),
      }).save();
    }

    return res.status(200).send({ message: "User Created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

router.route("/auth/login").post(async (req, res) => {
  try {
    const { error } = validateLogin(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send({ message: "Invalid Email or Password" });
    }
    const token = user.generateAuthToken();

    res.status(200).send({
      data: token,
      message: "Logged in successfully",
      firstname: user.firstname,
      lastname: user.lastname,
      phonenumber: user.phonenumber,
      email: user.email,
      accounttype: user.accounttype,
      verified: user.verified,
      isAdmin: user.isAdmin,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
