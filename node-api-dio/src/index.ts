import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express(); // instanciar a aplicação

app.use(express.json()); // Configurações da aplicação
app.use(express.urlencoded({extended: true}));

app.use(usersRoute); // Configurações de Rotas

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});