const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.redirect3dst = functions.https.onRequest((req, res) => {
  res.redirect("https://3dstreet.org" + req.path);
});
