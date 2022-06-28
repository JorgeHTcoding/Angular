import { Usuario } from "./usuario";

export class Registro{
    public usuario: Usuario;
    public pass2:string;

    constructor(usuario:Usuario,pass2:string){
        this.usuario = usuario;
        this.pass2 = pass2;
    }
}