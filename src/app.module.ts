import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoAguaModule } from './consumo_agua/consumo_agua.module';

@Module({ 
  imports: [
    MongooseModule.forRoot('mongodb+srv://cellycruz:1234@webmobile.yxfug.mongodb.net/'),
    ConsumoAguaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
