import express, {Request, Response, NextFunction} from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express(); // instanciar a aplicação

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configurações de Rotas
app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);

// Configurações dos Handlers de Erro
app.use(errorHandler);

// Inicialização do Servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});