const Admin = require('../models/admin');
const { hashPassword, jwtToken, ComparePassword } = require('../utils/index');
const AdminController = {
  async register(req, res, next) {
    try {
      try {
        const { first_name, last_name, email, password } = req.body;
        const hash = hashPassword(password);
        const admin = await Admin.create({ first_name, last_name, email, password: hash });
        const token = jwtToken.createToken(admin);
        return res.status(201).send({ token, admin })
      } catch (e) {
        return next(new Error(e));
      }

    } catch (error) {
      console.log(error);
    }
  },
  async login(req, res, next) {
    try {

      const { email, password } = req.body;
      const admin = await Admin.findOne({where:{email}}).select('+password');
      if (admin && ComparePassword(password, admin.password)) {
        const { name, id } = admin;
        const token = jwtToken.createToken(admin);
        return res.status(200).send({ token, admin: { id, name, email }, message: { success: "You are login successfull!" } })
      } else {
        return res.status(400).send({ error: 'invalid email/password does not matched' });

      }

    } catch (e) {
      return next(new Error(e));
    }
  },
  async users(req,res,next){
     try {
        const admins = await Admin.find();
        return res.send(admins);
     } catch (error) {
       
     }
  },
}
module.exports = AdminController;