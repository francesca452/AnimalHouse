const express = require("express");
const router = express.Router();
//router per controllare un utente e proteggere l'accesso ai dati privati
const { getPrivateRoute } = require("../controllers/privateController");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getPrivateRoute);

module.exports = router;