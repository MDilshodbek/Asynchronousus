let email = "Hello@gmail.com";
let ps = "intensive";

function intoFacebook(password, email, callback) {
  setTimeout(() => {
    if (password === "intensive" && email === "Hello@gmail.com") {
      return callback("You logged into your account");
    } else {
      callback("Ooops! Something went wrong!");
    }
  }, 3000);
}
intoFacebook(ps, email, (data) => {
  console.log(data);
});
