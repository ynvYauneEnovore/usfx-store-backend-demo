
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductoEntity } from 'src/productos/entities/producto.entity';

@Entity('categorias_producto')
export class CategoriaProductoEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => ProductoEntity, (producto) => producto.categoriaProducto)
  productos: ProductoEntity[];
}
