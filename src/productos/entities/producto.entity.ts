import { CategoriaProductoEntity } from 'src/categoria-productos/entities/categoria-producto.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from 'typeorm';

  
  @Entity('productos')
  export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'id_categoria_productos_foreing_key'}) 
    idCategoriaProductos: number;
  
    @Column({ length: 50 })
    nombre: string;

    @Column({ length: 100 })
    descripcion: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;
    
    @CreateDateColumn({ name: 'fecha_creacion' })
    fechaCreacion: Date;
  
    @UpdateDateColumn({ name: 'fecha_modificacion' })
    fechaModificacion: Date;

    @ManyToOne(() => CategoriaProductoEntity, (categoriaProducto) => categoriaProducto.productos)
    @JoinColumn({ name: 'id_categoria_productos_foreing_key', referencedColumnName: 'id' })
    categoriaProducto: CategoriaProductoEntity;
      
  }