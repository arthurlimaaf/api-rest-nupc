const db = require('../db');

module.exports = {

    ///////////BUSCA TODAS AS ESCOLAS CADASTRADAS///////////
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM escolas', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    /////////BUSCA APENAS UMA UNICA ESCOLA/////////
    buscarUm: (NO_ENTIDADE) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM escolas WHERE NO_ENTIDADE = ?', [NO_ENTIDADE], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    excluir: (CO_ENTIDADE) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM escolas WHERE CO_ENTIDADE = ?', [CO_ENTIDADE], (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    ////////ALTERAR DADOS DA ESCOLA///////////
    alterar: (CO_ENTIDADE, LAT, LON) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE escolas SET LAT=?, LON=? WHERE CO_ENTIDADE=?',
             [LAT, LON, CO_ENTIDADE], 
             (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
                }
            );
        });
    }

    // /////////INSERÇÃO DE DADOS DA ESCOLA/////////////
    // inserir: (cod_Escola, nome_Escola, orgao_Regional, situacao_Funcionamento, dependencia_Administrativa, regiao, endereco, zona, residencia_Diferenciada, cidade, estado, cep, regulamentacao, resp_Regulamentacao, predio_Escolar, ocupacao, quantidade_Salas_Dentro, quantidade_Salas_Fora, total_Salas, salas_Utilizadas) => {
    //     return new Promise((aceito, rejeitado) => {
    //         db.query('INSERT INTO escola (cod_Escola, nome_Escola, orgao_Regional, situacao_Funcionamento, dependencia_Administrativa, regiao, endereco, zona, residencia_Diferenciada, cidade, estado, cep, regulamentacao, resp_Regulamentacao, predio_Escolar, ocupacao, quantidade_Salas_Dentro, quantidade_Salas_Fora, total_Salas, salas_Utilizadas) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    //          [cod_Escola, nome_Escola, orgao_Regional, situacao_Funcionamento, dependencia_Administrativa, regiao, endereco, zona, residencia_Diferenciada, cidade, estado, cep, regulamentacao, resp_Regulamentacao, predio_Escolar, ocupacao, quantidade_Salas_Dentro, quantidade_Salas_Fora, total_Salas, salas_Utilizadas], 
    //          (error, results) => {
    //             if(error) { rejeitado(error); return; }
    //             aceito(results.idEscola);
    //             }
    //         );
    //     });
    // },


    
};