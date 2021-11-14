const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://127.0.0.1:5500",
    "Access-Control-Allow-Headers": "apikey",
  });
  if (req.headers.apikey) {
    if (req.headers.apikey !== "12345") {
      console.log("No API key provided");
      res.end(JSON.stringify({ error: "No API key provided" }));
    } else {
      const obj = { a: 1, b: 2, c: 3 };
      const string = JSON.stringify(obj);
      res.end(string);
    }
  } else {
    res.end(JSON.stringify({ error: "No API key provided" }));
  }
});

server.listen(3022);
