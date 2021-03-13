const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
exports.streetmixRedirect = functions.https.onRequest((req, res) => {
  res.redirect("https://kfarr.github.io/3dstreet/#https://streetmix.net" + req.path);
});
