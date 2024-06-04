import { Controller, Get, Param } from '@nestjs/common';
import { PersonasService } from './personas.service';

@Controller('personas')
export class PersonasController {
    private personas = [['franz', 'mamani' ,'25'],['Martin', 'mamani' ,'65'],
    ['Fernando', 'escalante', '26'],['Rodrigo', 'Escalante', '28'],['Rocio', 'Zuñiga','27']];

    constructor(
        private readonly personasService: PersonasService
        ) {}
        @Get()
      
      
        getAllProductos(){
        // return personas;
        return this.personasService.findAll();
        }
        @Get(":id")
        getProductosById(@Param("id") id:String){
        // return peronas[+id];
        return this.personasService.findById(+id);
        }
       

// @Get()
 //getAllProductos(){
 //return this.personas;
// }
// @Get(":id")
// getProductosById(@Param("id") id:String){
 //return this.personas[+id]
// }

}
