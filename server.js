const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json()); // required to parse JSON in request body

    // API routes
    // server.use(require("./server/routes/expeditions"));
    // server.use(require("./server/routes/bookings"));
    // server.use(require("./server/routes/emails"));
    // server.use(require("./server/routes/payments"));
    // server.use(require("./server/routes/messenger"));

    // Non-API routes get handled by Next.js
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log(
        `Running Nature Coin in ${
          dev ? "development" : "PRODUCTION"
        } mode on port 3000`
      );
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
