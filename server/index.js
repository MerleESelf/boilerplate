//intialize port
const PORT = process.env.PORT || 3000;
// require app
const app = require("./app");

app.listen(PORT, function () {
  console.log(`Your server, listening on port ${PORT}`);
});
