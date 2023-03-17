import { db } from "../db.js";

export const getFuncionarios = (_, res) => {
    const q = "SELECT * FROM funcionarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};
export const addFuncionario = (req, res) => {
    const q = "INSERT INTO funcionarios(`nome`,`cpf`,`email`,`telefone`,`data_nascimento`,`funcao`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.cpf,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento,
        req.body.funcao

    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Funcionário criado com sucesso");
    });
};

export const updateFuncionario = (req, res) => {
    const q = "UPDATE funcionarios SET `nome` = ?,`email` = ?,`telefone` = ?,`data_nascimento` = ?,`cpf`=?,`funcao`=? WHERE `idfuncionarios` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento,
        req.body.cpf,
        req.body.funcao
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Funcionário atualizado com sucesso");
    });
};

export const deleteFuncionario = (req, res) => {
    const q = "DELETE FROM funcionarios WHERE `idfuncionarios` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Funcionário deletado com sucesso.");
    });
};