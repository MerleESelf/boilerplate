// initialize router
const router = require("express").Router();

// any redirection to other folders for specfic routes will go below.

//error handling 404
router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
