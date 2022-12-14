const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/", (req, res) => {
  const { x, y } = req.body;
  const result = x + y;
  res.status(200).send(result.toString());
});

exports.app = functions.https.onRequest(app);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
