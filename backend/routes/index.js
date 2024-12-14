const AdminController = require("../controllers/adminController");


const routes = (app) =>{
  app.post('/api/admin/register',AdminController.register);
  app.post('/api/admin/login',AdminController.login);
  app.get('/api/admin/users',AdminController.users);
}

module.exports = routes;