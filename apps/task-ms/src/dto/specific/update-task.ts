import { CreateTaskDto } from './create-task';
import { PartialType } from '@nestjs/mapped-types'

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}