import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
  } from 'typeorm';

@Entity('usuarios')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', unique: true })
    correo: string;
  
    @Column({ length: 150, select: false })
    clave: string;    
  
    @Column({ type: 'varchar' })
    primer_nombre: string;
  
    @Column({ type: 'varchar', nullable: true })
    segundo_nombre: string | null;
  
    @Column({ type: 'varchar' })
    primer_apellido: string;
  
    @Column({ type: 'varchar', nullable: true })
    segundo_apellido: string | null;
  
    @Column({ type: 'varchar' })
    direccion: string;
  
    @Column({ type: 'int' })
    celular: number;
  
    @Column({ type: 'int', nullable: true })
    telefono: number | null;
  
    @Column({ length: 20 })
    rol: string;
  
    @Column({ type: 'varchar', nullable: true })
    photo: string | null;
  
    @Column({ type: 'varchar' })
    genero: string;
  
    @Column()
    estado_disponibilidad: boolean;
  
    @Column({ type: 'date' })
    fecha_nacimiento: Date;
  
    @Column({ type: 'int', nullable: true })
    num_documento: number | null;
  
    @Column({ type: 'varchar', nullable: true })
    ciudad: string | null;
  
    @Column({ type: 'varchar', nullable: true })
    estado: string | null;
  
    @Column({ type: 'varchar', nullable: true })
    pais: string | null;
}
