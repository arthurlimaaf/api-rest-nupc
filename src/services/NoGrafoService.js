const db = require('../db');

module.exports = {

    ///////////BUSCA TODAS OS NOS GRAFOS CADASTRADOS///////////
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM nografo', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    /////////BUSCA APENAS UMA UNICA REGIAO/////////
    buscarUm: (IDNO) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM nografo WHERE IDNO = ?', [IDNO], (error, results) => {
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