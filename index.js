import express from "express";
import cors from "cors";
import funcionarioRoutes from './routes/funcionarios.js';
const app = express();

app.use(express.json());
app.use(cors());

app.use("/", funcionarioRoutes);

app.listen(8800);