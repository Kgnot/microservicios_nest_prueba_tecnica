import {
  CanActivate,
  ExecutionContext,
  Global,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AUTH_SERVICE } from '../_config';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';

@Global()
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private client: ClientProxy) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader) return false;

    const token = this.extractTokenFromHeader(request);

    try {
      const payload = this.client.send({ cmd: 'verify_jwt' }, { token });

      request.user = payload;
      return true;
    } catch {
      return false;
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
