import { User } from "../entities/User";

export interface IUSersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}