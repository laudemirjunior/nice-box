import { UserRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

export const updateUserService = async (id: string, body: any) => {
  try {
    for (const [key, value] of Object.entries(body)) {
      await new UserRepository().updateUser(id, {
        [key]: value,
      });
    }

    const user = await new UserRepository().findUser('id', id);

    delete user.password;
    delete user.admin;

    return user;
  } catch {
    throw new ErrorHandler(404, 'user not found');
  }
};
