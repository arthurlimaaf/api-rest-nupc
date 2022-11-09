const express = require('express');
const router = express.Router();

const EscolaController = require('./controllers/EscolaController');
const RegiaoController = require('./controllers/RegiaoController');
const NoGrafoController = require('./controllers/NoGrafoController');
const DocentesController = require('./controllers/DocentesController');
const MatriculaController = require('./controllers/MatriculaController');

///////Escolas//////////
router.get('/listEscola', EscolaController.buscarTodos);
router.get('/list-escola/:codigo', EscolaController.buscarUm);
router.delete('/listEscola/:codigo', EscolaController.excluir);
router.put('/alterar-escola/:CO_ENTIDADE', EscolaController.alterar);

//////Regiao//////////
router.get('/list-regiao', RegiaoController.buscarTodos);
router.get('/list-regiao/:codigo', RegiaoController.buscarUm);

//////NoGrafo//////////
router.get('/list-nografo', NoGrafoController.buscarTodos);
router.get('/list-nografo/:codigo', NoGrafoController.buscarUm);

//////Docentes//////////
router.get('/listDocentes', DocentesController.buscarTodos);
router.get('/list-docentes/:codigo', DocentesController.buscarUm);
router.delete('/listDocentes/:codigo', DocentesController.excluir);

//////Matricula Aluno//////////
router.get('/listMatricula', MatriculaController.buscarTodos);
router.get('/list-matricula/:codigo', MatriculaController.buscarUm);
router.delete('/listMatricula/:codigo', MatriculaController.excluir);
router.put('/alterar-matricula/:ID_MATRICULA', MatriculaController.alterar);

// router.post('/cad-escola', EscolaController.inserir);
// router.put('/alterar-escola/:codigo', EscolaController.alterar);

module.exports = router;