const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String,
    password: String,
    isBlocked: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
}
);
module.exports = mongoose.model('User', UserSchema);   