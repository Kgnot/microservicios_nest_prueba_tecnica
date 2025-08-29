import { TeamDto } from '../dto/team-dto';

export function teamMapperToDto(entity: any): TeamDto {
  return {
    id: entity.team_id,
    name: entity.name,
  };
}
