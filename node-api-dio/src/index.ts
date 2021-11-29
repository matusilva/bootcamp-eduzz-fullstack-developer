import express, {Request, Response, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express(); // instanciar a aplicação

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'Testando ts-node-dev'});
});

app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});