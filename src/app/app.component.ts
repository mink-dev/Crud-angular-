import { Component, OnInit } from '@angular/core';

import { UsuariosService } from './usuarios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'CRUDAngularMySQL';

  usuarios = null;

  usuario = {
    idUsuario : null,
    nombre : null, 
    telefono: null,
    email:null
  }

  constructor(private usuariosServicio: UsuariosService){}

  ngOnInit(){
//    this.obtenerUsuarios();
    //console.log(this.usuarios);
  }

  // obtenerUsuarios(){
  //   this.usuariosServicio.obtenerUsuarios().subscribe(
  //       result => this.usuarios = result
  //       );
  // }

  // bajaUsuario(idUsuario){
  //   this.usuariosServicio.bajaUsuario(idUsuario).subscribe(
  //     datos => {
  //       if(datos['resultado']  == 'OK'){
  //         alert(datos['mensaje']);
  //         this.obtenerUsuarios();

  //       }
  //     }
  //   );
  // }

  // editarUsuario(){
  //   this.usuariosServicio.editarUsuario(this.usuario).subscribe(
  //      datos => {
  //        if(datos['resultado'] == 'OK'){
  //           alert(datos['mensaje']);
  //           this.obtenerUsuarios();
  //        }
  //      }
  //   );
  // }

  // seleccionarUsuario(idUsuario){
  //   this.usuariosServicio.seleccionarUsuario(idUsuario).subscribe(
  //     result => this.usuario = result[0]
  //   );
  // }

  // hayRegistros(){
  //   return true;
  // }
}
