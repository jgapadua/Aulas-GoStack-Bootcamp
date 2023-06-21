import User from '../infra/typeorm/entities/User';
import { getRepository } from 'typeorm';

class GetAllUsersService {

  public async execute() {
    const user = getRepository(User);
    const users = await user.find();

    return users;
  }
}

export default GetAllUsersService;
