const bcrypt = require('bcryptjs');
const saltRounds = 5;

const userController = {};

userController.createUser = (req, res, next) => {
  const { username, password} = req.body;
  if (!username || !password || typeof username !== 'string' || typeof password !== 'string') {
    // otherwise, return next(err in here) this will invoke global error handler
    console.error({error: 'Invalid input'});
    return res.redirect('/');
  } else {
    console.log('good job on creating a new user')
    console.log(req.body);

    // 
    return next();
  }
}

module.exports = userController;