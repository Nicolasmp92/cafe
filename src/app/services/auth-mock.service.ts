import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {
  private mockUsers = [
    { nombre: 'admin', pass: '1234', rol: 'Administrador' },
    { nombre: 'garzon', pass: '5678', rol: 'Garzón' },
    { nombre: 'cocina', pass: '91011', rol: 'Cocina' },
  ];

  login(usuario: string, password: string): Observable<LoginResponse | null> {
    const user = this.mockUsers.find(
      (u) => u.nombre === usuario && u.pass === password
    );

    if (user) {
      return of({ token: 'fake-jwt-token', rol: user.rol });
    } else {
      return of(null);
    }
  }
}
