const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
  first_name: { type: String,default:'',required:true},
  last_name: { type: String,default:'',required:true},
  email:  { type: String,unique:true,required:true,index: true},
  email_verified :{type: Boolean,default:false},
  email_verify_token:{type: String,default:null},
  phone:  { type: String,default:''},
  phone_verified :{type: Boolean,default:false},
  phone_otp_number:{type:Number,default:null},
  phone_otp_expired_at:{ type: Date,default:null},
  avatar:  { type: String,default:''},
  password: { type: String,required:true},
  password_reset_token:{type: String,default:null},
  reset_token_expired_at: { type: Date,default:null},
  active: { type: Boolean,default:true},
  account_type: { type: String, enum: ['single', 'organization'], default: 'single' },
  billing_address: { type: String,default:''},
  shipping_address: { type: String,default:''},
  role: { type: String, enum: ['admin', 'user'], default: 'admin' },
 created_at: { type: Date, default: Date.now },
 updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("admin",adminSchema)