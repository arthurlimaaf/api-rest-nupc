const MatriculaService = require('../services/MatriculaService');


module.exports = {
    buscarTodos: async (req, res) => {
        let json = {result:[]};

        let matricula = await MatriculaService.buscarTodos();

        for(let i in matricula){
            json.result.push({
                // DESCRICAO: regiao[i].DESCRICAO,
                ID_ALUNO: matricula[i].ID_ALUNO,
                ID_MATRICULA: matricula[i].ID_MATRICULA,
                NU_IDADE: matricula[i].NU_IDADE, 
                TP_SEXO: matricula[i].TP_SEXO, 
                TP_COR_RACA: matricula[i].TP_COR_RACA, 
                TP_NACIONALIDADE: matricula[i].TP_NACIONALIDADE, 
                TP_ZONA_RESIDENCIAL: matricula[i].TP_ZONA_RESIDENCIAL, 
                TP_LOCAL_RESID_DIFERENCIADA: matricula[i].TP_LOCAL_RESID_DIFERENCIADA, 
                TP_ETAPA_ENSINO: matricula[i].TP_ETAPA_ENSINO, 
                LAT: matricula[i].LAT, 
                LON: matricula[i].LON
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let ID_ALUNO = req.params.codigo;
        let matricula = await MatriculaService.buscarUm(ID_ALUNO);

        if(matricula) {
            json.result = matricula;
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {result:[]};

        let ID_ALUNO = req.params.codigo

        let matricula = await MatriculaService.excluir(ID_ALUNO);

        if(matricula) {
            json.result = matricula;
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:[]};

        // let idEscolas = req.params.idEscolas;
        let ID_MATRICULA = req.params.ID_MATRICULA;
        let LAT = req.body.LAT;
        let LON = req.body.LON;

        if(ID_MATRICULA && LAT && LON) {
            await MatriculaService.alterar(ID_MATRICULA, LAT, LON);
            json.result = {
                ID_MATRICULA,
                LAT,
                LON
            };
        }else {
            json.error = 'Campos não Enviados';
        }

        res.json(json);
    }


}