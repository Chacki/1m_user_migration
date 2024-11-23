import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async resetProblemsFlag(): Promise<number> {
    const countWithProblems = await this.userRepository.count({
      where: { hasproblems: true },
    });

    await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set({ hasproblems: false })
      .where('hasproblems = :hasproblems', { hasproblems: true })
      .execute();

    return countWithProblems;
  }
}
