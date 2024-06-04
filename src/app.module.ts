import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PersonasModule } from './personas/personas.module';
import { ProductosModule } from './productos/productos.module';


@Module({
  imports: [PersonasModule, ProductosModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
