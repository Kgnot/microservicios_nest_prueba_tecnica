import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtToken } from '../dto/JwtToken';
import { envs } from '../config';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.user_id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async verifyJwt(token: string) {
    return this.jwtService.verify(token, { secret: envs.secret });
  }
}
