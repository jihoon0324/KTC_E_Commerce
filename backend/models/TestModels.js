const mongoose = require('mongoose');
//user: 회원이름, 아이디, 비밀번호, 주소, 휴대폰번호, 이메일, 어드민인지아닌지
const Testchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Test = mongoose.model('Test', Testchema);

module.exports = Test;
