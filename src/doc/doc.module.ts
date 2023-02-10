import { Module } from '@nestjs/common';
import { DocService } from './doc.service';
import { DocController } from './doc.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Doc, DocSchema } from './schema/Doc';

@Module({

  imports:[MongooseModule.forFeature([{name:Doc.name,schema:DocSchema}])],
  controllers: [DocController],
  providers: [DocService]
})
export class DocModule {}
