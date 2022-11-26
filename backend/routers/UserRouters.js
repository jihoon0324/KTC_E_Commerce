const Router = require('express');
const userRouter = Router();
const {
  registerUser,
  loginUser,
  //   updateUser,
} = require('../controller/UserController');

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
// userRouter.get('/update', updateUser);

module.exports = userRouter;
