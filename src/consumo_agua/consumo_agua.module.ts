import { Module } from '@nestjs/common';
import { ConsumoAguaController } from './consumo_agua.controller';
import { ConsumoAguaService } from './consumo_agua.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoAgua, ConsumoAguaSchema } from './consumo_agua.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'ConsumoAgua', schema: ConsumoAguaSchema}])],
  controllers: [ConsumoAguaController],
  providers: [ConsumoAguaService]
})
export class ConsumoAguaModule {}
