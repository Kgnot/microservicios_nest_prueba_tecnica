import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
} from '@nestjs/common';
import { AUTH_SERVICE } from '../_config';
import { ClientProxy } from '@nestjs/microservices';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE)
    private readonly authService: ClientProxy,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.send({ cmd: 'sign_in' }, signInDto);
  }
}
