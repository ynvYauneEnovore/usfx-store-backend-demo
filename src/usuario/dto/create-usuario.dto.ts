export class CreateUsuarioDto {
    readonly correo: string;
    readonly clave: string;
    readonly primer_nombre: string;
    readonly segundo_nombre?: string;
    readonly primer_apellido: string;
    readonly segundo_apellido?: string;
    readonly direccion: string;
    readonly celular: number;
    readonly telefono?: number;
    readonly tipo: number;
    readonly photo?: string;
    readonly genero: string;
    readonly estado_disponibilidad: boolean;
    readonly fecha_nacimiento: Date;
    readonly num_documento?: number;
    readonly ciudad?: string;
    readonly estado?: string;
    readonly pais?: string;
    readonly rol: string;
}
