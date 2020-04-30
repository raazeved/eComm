const router = require("express").Router();
const auth = require("../../auth");
const lojaValidation = require("../../../controllers/validacoes/lojaValidation");
const LojaController = require("../../../controllers/LojaController");

const lojaController = new LojaController();

// ROTAS DE LOJA 

router.get("/", auth.required, lojaController.index);   // pegar dados do usuario requisitado
router.get("/:id", auth.required, lojaController.show);

router.post("/", auth.required, lojaController.store);
router.put("/:id", auth.required, lojaValidation, lojaController.update);
router.delete("/:id", auth.required, lojaValidation, lojaController.remove);


module.exports = router;