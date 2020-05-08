import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

import { Usuarios } from '../models';
import { Router } from '@angular/router';

import { UsersComponent } from '../users/users.component'


//import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  btnAgregar: boolean = true;
  btnModificar: boolean = true;

@Input () usuario : Usuarios = { //declaracion de variable usuario de tipo objeto 
    idUsuario: null,
    nombre: null,
    telefono: null,
    email:null
  };
  

  @Output() enviarUsuarios = new EventEmitter();
  constructor(private usuariosServicio : UsuariosService,
              private route : Router,
              private userComponent : UsersComponent
              ) { }

  ngOnInit(): void {
  }

  
  altaUsuario(){
    this.usuariosServicio.altaUsuario(this.usuario).subscribe(
      datos => {
        if(datos['resultado'] =='OK'){
          alert(datos['mensaje']);
          this.usuariosServicio.obtenerUsuarios().subscribe(
            result =>{
               this.enviarUsuarios.emit(result)
               this.userComponent.componentForm=false;
               this.userComponent.componentUsers=true;
            }
          );        
          // this.obtenerUsuarios();
        }
      }
    );
  }

  editarUsuario(){
    this.usuariosServicio.editarUsuario(this.usuario).subscribe(
       datos => {
         if(datos['resultado'] == 'OK'){
            alert(datos['mensaje']);
            this.usuariosServicio.obtenerUsuarios().subscribe(
              result =>{
                 this.enviarUsuarios.emit(result)
                 this.userComponent.componentForm=false;
                 this.userComponent.componentUsers=true;
                 // this.mostrarComponenteUsers.emit(true);
                // this.ocultarComponentForm.emit(false);
              
              }
            );
           
            // this.ocultarComponentForm.emit(false);
       
         }
       }
    );
  }

}
