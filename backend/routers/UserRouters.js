const Router = require('express');
const userRouter = Router();
const {
  registerUser,
  loginUser,
  loggedInUserInfo,
  updateUser,
} = require('../controller/UserController');

userRouter.post('/register', registerUser);
userRouter.post('/loginUser', loginUser);
userRouter.post('/loggedInUserInfo', loggedInUserInfo);
userRouter.post('/update', updateUser);

module.exports = userRouter;
