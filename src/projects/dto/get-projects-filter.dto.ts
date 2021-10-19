import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProjectStatus } from '../project.model';

export class GetProjectsFilterDto {
  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
