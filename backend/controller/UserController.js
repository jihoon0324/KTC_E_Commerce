//user: get 로그인 마이어카운트/ post 회원가입 / update 마이어카운트  -1명(지훈)
const UserModel = require('../models/UserModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'snlkfoijwenfiojsadfZ()12312oadsfnknadfasf[]asdfnsdofj:sdfw';

// register user
module.exports.registerUser = async (req, res) => {
  const { name, username, password, email, phone, address, isAdmin } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return console.log('user already registered');
    }

    await UserModel.create({
      name,
      username,
      password: encryptedPassword,
      email,
      phone,
      address,
      isAdmin,
    }).then((data) => {
      console.log('Create User Success');
      res.json({ data });
    });
  } catch (error) {
    console.log(error.message);
  }
};

// check if the user  can login
module.exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      return console.log('user not found');
    }
    console.log('user Logged in');
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username: user.username }, JWT_SECRET);

      if (res.status(201)) {
        return res.json({ data: token });
      }
    } else {
      return console.log('wrong password');
    }
  } catch (error) {
    console.log(error.message);
  }
};

// call user information
module.exports.loggedInUserInfo = async (req, res) => {
  // const { token } = req.body;

  // try {
  //   const user = jwt.verify(token, JWT_SECRET);
  //   const tokenUsername = user.username;
  //  await UserModel.findOne({ username: tokenUsername }).then((data) => {
  //     res.json({ data: data }).catch(error), console.log(error.message);
  //   });
  // } catch (error) {}

  const { username } = req.body;
  try {
    await UserModel.findOne({}).then((data) => {
      res.json({ data: data });
    });
  } catch (error) {}
};

//update user information
module.exports.updateUser = async (req, res) => {
  const { _id, name, phone, address, username, password, email, isAdmin } =
    req.body;

  try {
    console.log(_id);
    await UserModel.findByIdAndUpdate(_id, {
      name,
      username,
      password,
      email,
      phone,
      address,
      isAdmin,
    });
  } catch (error) {
    console.log(error.message);
  }
};
