import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PersonasService {
    private personas0 = [
        {id:1,
        nombre:'Franz',
        apellido:'Mamani',
        edad:26
        },
        {id:2,
            nombre:'Martin',
            apellido:'Mamani Donaire',
            edad:76
            },
        {id:3,
            nombre:'Fernando',
            apellido:'Escalante',                
            edad:26
        },
        {id:4,
            nombre:'Rodrigo',
            apellido:'Escalante',
            edad:26
        },
        ];
        
        findAll(){
            return this.personas0;
        }
        findById(id:Number){
            const prod = this.personas0.find( p => p.id === id );
            if ( !prod ) throw new NotFoundException(`Producto con el id '${ id }' no
           encontrado`);
            return prod;
        }
           
}
