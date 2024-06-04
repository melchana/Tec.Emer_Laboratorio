import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductosService {
   
    private producto = [
        {id:1,nombre:'computadora dell',so:'windows 10',precio:2300},
        {id:2,nombre:'computadora hp',so:'windows 8',precio:3600},
        {id:3,nombre:'computadora toshiba',so:'debia 8',precio:3400},
        {id:4,nombre:'computadora mac',so:'Hackintosh',precio:4600},
        ];
        
        findAll(){
            return this.producto;
        }
        findById(id:Number){
            const prod = this.producto.find( p => p.id === id );
            if ( !prod ) throw new NotFoundException(`Producto con el id '${ id }' no
           encontrado`);
            return prod;
        }

        update(id: number) {
            const prod2 = this.findById( id );
            prod2.nombre="compu X";
            prod2.precio=1000;
            prod2.so="solaris";
            return prod2;
        }

        remove(id: number) {
            this.findById(id);
            //const produc=this.producto.filter(p=>p.id !== id)
             const produc=this.producto.filter(p=>p.id != id);
             return produc;
            //return await this.productoModel.deleteOne({ "sku": sku });
        }
}