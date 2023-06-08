import { UsuarioResponse } from "./usuario-response.model";

export class LoginResponse {
    success: boolean = false;
    token: string = "";
    usuario: UsuarioResponse = new UsuarioResponse();
    mensaje: string = "";
}