import { Request, Response, NextFunction, Router } from 'express';
import {StatusCodes} from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Matheus'}];
    res.status(StatusCodes.OK).json(users);
});

usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({uuid});
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    console.log(req.body);

    res.send(StatusCodes.CREATED).send(newUser);
});

export default usersRoute;
