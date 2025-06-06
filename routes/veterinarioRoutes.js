import express from 'express';
import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword ,actualizarPerfil, actualizarPassword} from '../controllers/veterinarioController.js';
import cheackAuth from '../middleware/authMiddleware.js';
const router = express.Router();

//area publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);


//area privada
router.get("/perfil", cheackAuth,perfil);
router.put("/perfil/:id", cheackAuth, actualizarPerfil);
router.put("/actualizar-password", cheackAuth, actualizarPassword);

export default router;