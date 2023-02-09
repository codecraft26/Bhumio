import { PartialType } from '@nestjs/mapped-types';
import { CreateSupportDeskDto } from './create-support-desk.dto';

export class UpdateSupportDeskDto extends PartialType(CreateSupportDeskDto) {}
