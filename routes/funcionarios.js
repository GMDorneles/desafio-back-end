import express from "express";
import { getFuncionarios, addFuncionario, updateFuncionario, deleteFuncionario } from "../controllers/Funcionarios.js";

const router = express.Router();

router.get('/', getFuncionarios);

router.post('/', addFuncionario);

router.put('/:id', updateFuncionario);

router.delete("/:id", deleteFuncionario);

export default router;