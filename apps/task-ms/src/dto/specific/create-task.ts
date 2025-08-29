import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TeamDto } from '../team-dto';
import { AppUserDto } from '../app-user-dto';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  public title: string;
  @IsString()
  @IsNotEmpty()
  public description: string;
  @IsString()
  @IsString() // esto por comodidad, si es posible cambiar a Date // todo
  @IsNotEmpty()
  public due_date?: string;
  @IsString()
  @IsNotEmpty()
  public state_id: string;
  @IsNumber()
  public team_id: number;
  @IsNumber()
  public user_id: number;

}
