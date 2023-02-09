import { PartialType } from '@nestjs/mapped-types';
import { CreatePoweruserDto } from './create-poweruser.dto';

export class UpdatePoweruserDto extends PartialType(CreatePoweruserDto) {}
