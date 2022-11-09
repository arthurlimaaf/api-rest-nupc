const NoGrafoService = require('../services/NoGrafoService');
const RegiaoService = require('../services/NoGrafoService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let nografo = await NoGrafoService.buscarTodos();

        for(let i in nografo){
            json.result.push({
                // DESCRICAO: regiao[i].DESCRICAO,
                nome: nografo[i].IDNO,
                LAT: nografo[i].LAT,
                LON: nografo[i].LON
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let IDNO = req.params.codigo;
        let nografo = await NoGrafoService.buscarUm(IDNO);

        if(nografo) {
            json.result = nografo;
        }

        res.json(json);
    }

}