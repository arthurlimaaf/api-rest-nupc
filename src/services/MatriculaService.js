const db = require('../db');

module.exports = {

    ///////////BUSCA TODAS AS REGIOES CADASTRADAS///////////
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM matricula', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    /////////BUSCA APENAS UMA UNICA REGIAO/////////
    buscarUm: (ID_ALUNO) => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM matricula WHERE ID_ALUNO = ?', [ID_ALUNO], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    excluir: (ID_ALUNO) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM matricula WHERE ID_ALUNO = ?', [ID_ALUNO], (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    alterar: (ID_MATRICULA, LAT, LON) => {
        return new Promise((aceito, rejeitado) => {
            db.query('UPDATE matricula SET LAT=?, LON=? WHERE ID_MATRICULA=?',
             [LAT, LON, ID_MATRICULA], 
             (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
                }
            );
        });
    }

}