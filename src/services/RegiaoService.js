const db = require('../db');

module.exports = {

    ///////////BUSCA TODAS AS REGIOES CADASTRADAS///////////
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM regiao', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    /////////BUSCA APENAS UMA UNICA REGIAO/////////
    buscarUm: (DESCRICAO) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM regiao WHERE DESCRICAO = ?', [DESCRICAO], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    }

}