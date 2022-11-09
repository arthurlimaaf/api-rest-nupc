const DocentesService = require('../services/DocentesService');


module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let docentes = await DocentesService.buscarTodos();

        for(let i in docentes){
            json.result.push({
                IDDOCENTES: docentes[i].IDDOCENTES,
                NU_IDADE: docentes[i].NU_IDADE,
                TP_SEXO: docentes[i].TP_SEXO,
                TP_COR_RACA: docentes[i].TP_COR_RACA, 
                TP_NACIONALIDADE: docentes[i].TP_NACIONALIDADE, 
                TP_ZONA_RESIDENCIAL: docentes[i].TP_ZONA_RESIDENCIAL, 
                TP_LOCAL_RESID_DIFERENCIADA: docentes[i].TP_LOCAL_RESID_DIFERENCIADA, 
                IN_NECESSIDADE_ESPECIAL: docentes[i].IN_NECESSIDADE_ESPECIAL, 
                TP_ESCOLARIDADE: docentes[i].TP_ESCOLARIDADE, 
                TP_ENSINO_MEDIO: docentes[i].TP_ENSINO_MEDIO, 
                TP_SITUACAO_CURSO_1: docentes[i].TP_SITUACAO_CURSO_1, 
                IN_ESPECIALIZACAO: docentes[i].IN_ESPECIALIZACAO, 
                IN_MESTRADO: docentes[i].IN_MESTRADO, 
                IN_DOUTORADO: docentes[i].IN_DOUTORADO, 
                IN_POS_NENHUM: docentes[i].IN_POS_NENHUM

            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let IDDOCENTES = req.params.codigo;
        let docentes = await DocentesService.buscarUm(IDDOCENTES);

        if(docentes) {
            json.result = docentes;
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {result:[]};

        let IDDOCENTES = req.params.codigo

        let docentes = await DocentesService.excluir(IDDOCENTES);

        if(docentes) {
            json.result = docentes;
        }

        res.json(json);
    }

}