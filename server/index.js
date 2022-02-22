//require db
const { db } = require("./db");
//intialize port
const PORT = process.env.PORT || 3000;
// require app
const app = require("./app");

//db sync and app.listen
db.sync().then(function () {
  app.listen(PORT, function () {
    console.log(`Your server, listening on port ${PORT}`);
  });
});
