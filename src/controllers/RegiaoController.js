const RegiaoService = require('../services/RegiaoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { result:{}};

        let regiao = await RegiaoService.buscarTodos();

        for(let i in regiao){
            json.result.push({
                // DESCRICAO: regiao[i].DESCRICAO,
                id: regiao[i].IDREGIAO,
                nome: regiao[i].DESCRICAO
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let DESCRICAO = req.params.codigo;
        let regiao = await RegiaoService.buscarUm(DESCRICAO);

        if(regiao) {
            json.result = regiao;
        }

        res.json(json);
    }

}