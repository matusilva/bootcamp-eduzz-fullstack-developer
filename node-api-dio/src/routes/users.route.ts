import { Request, Response, NextFunction, Router } from 'express';
import {StatusCodes} from 'http-status-codes';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).json(users);
});

usersRoute.get('/users/:uuid', async (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const user = await userRepository.findById(uuid);
    res.status(StatusCodes.OK).send({user});
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;

    const uuid = await userRepository.createUser(newUser);

    res.send(StatusCodes.CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const updateUser = req.body;

    updateUser.uuid = uuid;
    res.status(StatusCodes.OK).send(updateUser);
});

usersRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;
