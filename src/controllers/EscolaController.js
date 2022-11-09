const EscolaService = require('../services/EscolaService');

module.exports = {
    buscarTodos: async (req, res) => {
        var json = {result:[]};

        var escola = await EscolaService.buscarTodos();

        for(var i in escola){
            json.result.push({
                // idEscolas: escola[i].idEscolas,
                CO_ENTIDADE: escola[i].CO_ENTIDADE,
                NO_ENTIDADE: escola[i].NO_ENTIDADE,
                CO_ORGAO_REGIONAL: escola[i].CO_ORGAO_REGIONAL,
                TP_SITUACAO_FUNCIONAMENTO: escola[i].TP_SITUACAO_FUNCIONAMENTO, 
                CO_REGIAO: escola[i].CO_REGIAO, 
                CO_UF: escola[i].CO_UF, 
                CO_MUNICIPIO: escola[i].CO_MUNICIPIO, 
                TP_DEPENDENCIA: escola[i].TP_DEPENDENCIA, 
                TP_LOCALIZACAO: escola[i].TP_LOCALIZACAO, 
                TP_LOCALIZACAO_DIFERENCIADA: escola[i].TP_LOCALIZACAO_DIFERENCIADA, 
                TP_REGULAMENTACAO: escola[i].TP_REGULAMENTACAO, 
                TP_RESPONSAVEL_REGULAMENTACAO: escola[i].TP_RESPONSAVEL_REGULAMENTACAO, 
                IN_LOCAL_FUNC_PREDIO_ESCOLAR: escola[i].IN_LOCAL_FUNC_PREDIO_ESCOLAR, 
                TP_OCUPACAO_PREDIO_ESCOLAR: escola[i].TP_OCUPACAO_PREDIO_ESCOLAR, 
                QT_SALAS_UTILIZADAS_DENTRO: escola[i].QT_SALAS_UTILIZADAS_DENTRO, 
                QT_SALAS_UTILIZADAS_FORA: escola[i].QT_SALAS_UTILIZADAS_FORA, 
                QT_SALAS_UTILIZADAS: escola[i].QT_SALAS_UTILIZADAS, 
                LAT: escola[i].LAT, 
                LON: escola[i].LON
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {result:[]};

        let NO_ENTIDADE = req.params.codigo;
        let escola = await EscolaService.buscarUm(NO_ENTIDADE);

        if(escola) {
            json.result = escola;
        }

        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {result:[]};

        let CO_ENTIDADE = req.params.codigo

        let escola = await EscolaService.excluir(CO_ENTIDADE);

        if(escola) {
            json.result = escola;
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let CO_ENTIDADE = req.params.CO_ENTIDADE;
        let LAT = req.body.LAT;
        let LON = req.body.LON;

        if(CO_ENTIDADE && LAT && LON) {
            await EscolaService.alterar(CO_ENTIDADE, LAT, LON);
            json.result = {
                CO_ENTIDADE,
                LAT,
                LON
            };
        }else {
            json.error = 'Campos não Enviados';
        }

        res.json(json);
    }



    // inserir: async(req, res) => {
    //     let json = {error:'', result:{}};

    //     let cod_Escola = req.body.cod_Escola;
    //     let nome_Escola = req.body.nome_Escola;
    //     let orgao_Regional = req.body.orgao_Regional;
    //     let situacao_Funcionamento = req.body.situacao_Funcionamento;
    //     let dependencia_Administrativa = req.body.dependencia_Administrativa;
    //     let regiao = req.body.regiao;
    //     let endereco = req.body.endereco;
    //     let zona = req.body.zona;
    //     let residencia_Diferenciada = req.body.residencia_Diferenciada;
    //     let cidade = req.body.cidade;
    //     let estado = req.body.estado;
    //     let cep = req.body.cep;
    //     let regulamentacao = req.body.regulamentacao;
    //     let resp_Regulamentacao = req.body.resp_Regulamentacao;
    //     let predio_Escolar = req.body.predio_Escolar;
    //     let ocupacao = req.body.ocupacao;
    //     let quantidade_Salas_Dentro = req.body.quantidade_Salas_Dentro;
    //     let quantidade_Salas_Fora = req.body.quantidade_Salas_Fora;
    //     let total_Salas = req.body.total_Salas;
    //     let salas_Utilizadas = req.body.salas_Utilizadas;

    //     if(cod_Escola && nome_Escola && orgao_Regional && situacao_Funcionamento && dependencia_Administrativa && regiao && endereco && zona && residencia_Diferenciada && cidade && estado && cep && regulamentacao && resp_Regulamentacao && predio_Escolar && ocupacao && quantidade_Salas_Dentro && quantidade_Salas_Fora && total_Salas && salas_Utilizadas) {
    //         let escolaInsere = await EscolaService.inserir(cod_Escola, nome_Escola, orgao_Regional, situacao_Funcionamento, dependencia_Administrativa, regiao, endereco, zona, residencia_Diferenciada, cidade, estado, cep, regulamentacao, resp_Regulamentacao, predio_Escolar, ocupacao, quantidade_Salas_Dentro, quantidade_Salas_Fora, total_Salas, salas_Utilizadas);
    //         json.result = {
    //             idEscola: escolaInsere,
    //             cod_Escola, 
    //             nome_Escola, 
    //             orgao_Regional, 
    //             situacao_Funcionamento, 
    //             dependencia_Administrativa, 
    //             regiao, 
    //             endereco, 
    //             zona, 
    //             residencia_Diferenciada, 
    //             cidade, 
    //             estado, 
    //             cep, 
    //             regulamentacao, 
    //             resp_Regulamentacao, 
    //             predio_Escolar, 
    //             ocupacao, 
    //             quantidade_Salas_Dentro, 
    //             quantidade_Salas_Fora, 
    //             total_Salas, 
    //             salas_Utilizadas
    //         };
    //     }else {
    //         json.error = 'Campos não Enviados';
    //     }

    //     res.json(json);
    // },

    
}