import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private repository: Repository<UsuarioEntity>,
  ){}
  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    return this.repository.save({
      correo: createUsuarioDto.correo,
      clave: createUsuarioDto.clave,
      primer_nombre: createUsuarioDto.primer_nombre,
      primer_apellido: createUsuarioDto.primer_apellido,
      direccion: createUsuarioDto.direccion,
      celular: createUsuarioDto.celular,
      tipo: createUsuarioDto.tipo,
      genero: createUsuarioDto.genero,
      estado_disponibilidad: createUsuarioDto.estado_disponibilidad,
      fecha_nacimiento: createUsuarioDto.fecha_nacimiento,
      rol: createUsuarioDto.rol
    });
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
