const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("here is our history");
    return; //important as .js keeps reading the coding even after this point
    //so it will try to res.end the lower command as well, leading to
    //error:- ERR_STREAM_WEITE_AFTER_END
  }
  res.end(`<h1>ohoo!</h1>
    <p>we can't find your page</p>
    <a href="/" back home</a>`);
});
server.listen(5000);
