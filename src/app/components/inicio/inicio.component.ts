import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario!: UsuarioModel;

  constructor(){}

  ngOnInit(){
    this.usuario = new UsuarioModel();
    this.usuario.nombre = 'niko';
  }
  onSubmit( form:NgForm  ){
    console.log('formulario enviado');
    console.log(this.usuario);
    console.log(form)
  }

}
