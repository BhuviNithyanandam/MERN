const express = require('express');
const router = express.Router();

//  Middleware only for admin route
function logForAdminOnly(req, res, next) {
  console.log('Admin route accessed');
  next();
}

// app.METHOD(PATH, middlewareFunction, routeHandlerFunction);
// Apply middleware to this specific route
router.get('/', logForAdminOnly, (req, res) => {
  res.send('Welcome to the Admin panel!');
});

module.exports = router;
