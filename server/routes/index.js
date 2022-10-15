const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorHandler");
const UserController = require("../controllers/userController");
const moviesRoute = require("./movies");
const genresRoute = require("./genres");
const castsRoute = require("./casts");
const pubRoute = require("./pub");

router.post("/register-admin", UserController.registerAdmin);
router.post("/login", UserController.login);
router.use("/movies", authentication, moviesRoute);
router.use("/genres", authentication, genresRoute);
router.use("/casts", authentication, castsRoute);
router.use("/pub", pubRoute);
router.use(errorHandler);

module.exports = router;
