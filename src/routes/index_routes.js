const {Router} = require('express');
const router = Router();
const mysqlConnection = require('../database');

// routes Matematicas
router.get('/matematicas', (req, res) => {
    mysqlConnection.query('SELECT * FROM matematicas', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/matematicas:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM matematicas WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/matematicas', (req, res) => {
    const { id, pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta } = req.body;
    const query = `
    CALL matematicasAddorEdit(?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Pregunta agregada'});
        }else{
            console.log(err);
        }
    })
});

router.put('/matematicas:id', (req, res) => {
    const { pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta } = req.body;
    const { id } = req.params;
    const query = 'CALL matematicasAddorEdit(?, ?, ?, ?, ?, ?, ?)'
    mysqlConnection.query(query, [id, pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Pregunta actualizada'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/matematicas:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM matematicas WHERE id = ?', [id], (err, rows, fields) =>{
        if (!err) {
            res.json({Status: 'Pregunta eliminada'});
        }else{
            console.log(err);
        }
    });
});

// routes Español
router.get('/espanol', (req, res) => {
    mysqlConnection.query('SELECT * FROM español', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get('/espanol:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM español WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/espanol', (req, res) => {
    const { id, pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta } = req.body;
    const query = `
    CALL españolAddorEdit(?, ?, ?, ?, ?, ?, ?);
    `;
    mysqlConnection.query(query, [id, pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Pregunta agregada'});
        }else{
            console.log(err);
        }
    })
});

router.put('/espanol:id', (req, res) => {
    const { pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta } = req.body;
    const { id } = req.params;
    const query = 'CALL españolAddorEdit(?, ?, ?, ?, ?, ?, ?)'
    mysqlConnection.query(query, [id, pregunta, opcion_a, opcion_b, opcion_c, opcion_d, correcta], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Pregunta actualizada'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/espanol:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM español WHERE id = ?', [id], (err, rows, fields) =>{
        if (!err) {
            res.json({Status: 'Pregunta eliminada'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;