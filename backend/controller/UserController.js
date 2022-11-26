//user: get 로그인 마이어카운트/ post 회원가입 / update 마이어카운트  -1명(지훈)

const User = require('../models/UserModels');

module.exports.registerUser = async (req, res) => {
  const { name, username, password, email, phone, address, isAdmin } = req.body;

  try {
    await User.create({
      name,
      username,
      password,
      email,
      phone,
      address,
      isAdmin,
    }).then((data) => {
      console.log('Create User Success');
      res.send(data);
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user.password == password) {
      console.log('loginUser Success');
    } else {
      console.log('loginUser Failure');
    }
  } catch (error) {
    console.log(error.message);
  }
};
