import { Component, OnInit } from '@angular/core';
import { Usuarios} from '../models';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
// import {FormComponent } from '../form/form.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios = null;
  componentUsers: boolean = true;
  componentForm: boolean = false;
  btnAgregar : boolean=false;
  btnModificar : boolean=true;
  usuario : Usuarios = {
    idUsuario: null,
    nombre: null,
    telefono: null,
    email: null

  }

  constructor( private usuariosServicio: UsuariosService,
               private route : Router
               
              
              ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this.usuariosServicio.obtenerUsuarios().subscribe(
        result => this.usuarios = result
        );
  }

  bajaUsuario(idUsuario){
    this.usuariosServicio.bajaUsuario(idUsuario).subscribe(
      datos => {
        if(datos['resultado']  == 'OK'){
          alert(datos['mensaje']);
          this.obtenerUsuarios();

        }
      }
    );
  }
  seleccionarUsuario(idUsuario){
    this.usuariosServicio.seleccionarUsuario(idUsuario).subscribe(
      result => {
        this.usuario = result[0]
        this.componentForm = true;
        this.componentUsers = false;
       
        //  this.route.navigate(['crud']);
        
      }
        
        
       
    );
  }

  hayRegistros(){
    return true;
  }

}
