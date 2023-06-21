import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import GetAllUsersService from '@modules/users/services/GetAllUsersService';

class UsersController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return res.json(user);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const listUser = container.resolve(GetAllUsersService);
    
    const user = await listUser.execute();

    return res.json(user);
  }
  /* appointmentsRouter.get('/', async (req, res) => {
  const appointments = await appointmentsRepository.find();

  return res.json(appointments);
}); */
}

export default UsersController;
