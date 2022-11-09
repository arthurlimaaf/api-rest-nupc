const db = require('../db');

module.exports = {

    ///////////BUSCA TODAS AS REGIOES CADASTRADAS///////////
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM docentes', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    /////////BUSCA APENAS UMA UNICA REGIAO/////////
    buscarUm: (IDDOCENTES) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM docentes WHERE IDDOCENTES = ?', [IDDOCENTES], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    excluir: (IDDOCENTES) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM docentes WHERE IDDOCENTES = ?', [IDDOCENTES], (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }

}