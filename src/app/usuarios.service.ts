import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url = "http://localhost:80/server/"; 

  constructor(private http: HttpClient) { }
  obtenerUsuarios(){ 
    return this.http.get(this.url + 'ObtenerUsuarios.php');
  }

  altaUsuario(usuario){
    return this.http.post(this.url + 'AltaUsuario.php', JSON.stringify(usuario));
  }

  bajaUsuario(idUsuario:number){
    return this.http.get(this.url + 'BajaUsuario.php?idUsuario='+ idUsuario);
  }

  seleccionarUsuario(idUsuario: number){
    return this.http.get(this.url + 'SeleccionarUsuario.php?idUsuario=' + idUsuario);

  }
  editarUsuario(usuario){
    return this.http.post(this.url  + 'EditarUsuario.php', JSON.stringify(usuario));

  }

  pruebasGit(){
    alert('pruebas con github');
  }
}
