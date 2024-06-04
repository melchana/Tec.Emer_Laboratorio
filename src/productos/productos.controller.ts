import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';

import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {

    constructor(
        private readonly productoService: ProductosService
        ) {}
        @Get()
        getAllProductos(){
        // return personas;
        return this.productoService.findAll();
        }
        @Get(":id")
        getProductosById(@Param("id") id:String){
        // return peronas[+id];
        return this.productoService.findById(+id);
        }

        @Patch(':id')
            update(@Param('id', ParseIntPipe ) id: number) {
                return this.productoService.update( id);
            }
        @Delete(':id')
        remove(@Param('id',ParseIntPipe) id:number){
            return this.productoService.remove(id);
            
        } 
}
