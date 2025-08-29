import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { envs } from '../config';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../service/prisma-service';

@Module({
  controllers: [AuthController],
  providers: [AuthService,UsersService, PrismaService],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: envs.secret,
      signOptions: { expiresIn: '1d' }, // documentation tell us 60s.
    }),
  ],
})
export class AuthModule {}
