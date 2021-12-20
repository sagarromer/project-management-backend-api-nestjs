import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProjectStatus } from '../project-status.enum';

export class GetProjectsFilterDto {
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
