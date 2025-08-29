import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../service/prisma-service';

@Injectable()
export class UsersService {
  constructor(@Inject() private prisma: PrismaService) {}

  async findOne(id: number) {
    return this.prisma.app_user.findUnique({
      where: {
        user_id: id,
      },
      include: {
        other_app_user: true,
      },
    });
  }

  async findByUsername(username: string) {
    return this.prisma.app_user.findUnique({
      where: {
        username: username,
      },
      include: {
        other_app_user: true,
      },
    });
  }
}
