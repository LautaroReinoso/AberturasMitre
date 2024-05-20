import { IUser } from '../interfaces/IUser';

export class User implements IUser{
    id?: number = 0;
    nombre: string = '';
    apellido: string = '';
    fechaNacimiento: string = '';
    direccion: string = '';
    ciudadProvincia: string = '';
    cel: string = '';
    mail: string = '';
    facebook: string = '';
    facebookLink: string = '';
    instagram: string = '';
    instagram_link: string = '';
    whatsapp_link: string = '';
    horario: string = '';
    
    constructor () {}
}