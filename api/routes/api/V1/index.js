const router = require("express").Router();

router.use("/Usuarios", require("./Usuarios"));

router.use("/Lojas", require("./Lojas"));

module.exports = router;
