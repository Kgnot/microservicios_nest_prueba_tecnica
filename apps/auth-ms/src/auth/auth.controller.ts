import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from '../dto/sign-in.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { JwtToken } from '../dto/JwtToken';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  // @Post('login')
  @MessagePattern({ cmd: 'sign_in' })
  signIn(@Payload() signInDto: SignInDto) {
    return this.authService.singIn(signInDto.username, signInDto.password);
  }

  // por comidad haré el validador aqui:

  @MessagePattern({ cmd: 'verify_jwt' })
  verifyJwt({ token }: JwtToken) { // este podria ser dos, tanto token como refresh token, ahora asi por rapidez
    return this.authService.verifyJwt(token);
  }
}
