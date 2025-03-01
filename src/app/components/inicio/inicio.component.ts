import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import { AuthMockService } from '../../services/auth-mock.service'; /*servicio para simular backend*/



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private authService: AuthMockService, private router: Router) {}

  ngOnInit() {
    // Simula datos de usuario para pruebas
    this.usuario.nombre = 'niko';
    this.usuario.rol = 'Garzón';
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.error('Formulario inválido');
      return;
    }

    console.log('Intentando iniciar sesión:', this.usuario);

    this.authService.login(this.usuario.nombre, this.usuario.pass).subscribe(
      (response) => {
        console.log('Login exitoso:', response);

        // Redirigir según el rol del usuario
        switch (this.usuario.rol) {
          case 'Administrador':
            this.router.navigate(['/admin']);
            break;
          case 'Garzón':
            this.router.navigate(['/garzon']);
            break;
          case 'Cocina':
            this.router.navigate(['/cocina']);
            break;
          default:
            alert('Rol no reconocido');
        }
      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        alert('Usuario o contraseña incorrectos');
      }
    );
  }
}
