const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  }
  
});

// kullanıcının şifresini veritabanındaki user modelinde gizlemek için middleware kullanıyoruz.
UserSchema.pre('save', function(next){
  const user = this; //this sayesinde hangi kullanıcı giriyorsa onu yakalıyoruz.

  // parametrelerden 10 sabit bir değer , şifrenin ne kadar karmaşık olarak şifrelendiğiyle alakalı
  bcrypt.hash(user.password, 10, (error,hash) => {
    user.password=hash; 
    next();
  })
});


const User = mongoose.model('User', UserSchema);
module.exports = User;