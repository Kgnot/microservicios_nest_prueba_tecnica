import { AppUserDto } from '../dto/app-user-dto';
import { AppUserEntity } from '../entity/app-user.entity';

export function appUserMapperToDto(appUser: AppUserEntity): AppUserDto {
  return {
    id: appUser.user_id,
    name: appUser.name,
    role: appUser.role_id,
  };
}
