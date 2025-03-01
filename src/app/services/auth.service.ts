import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://tu-api.com/auth'; // Cambia a tu API real

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { usuario, password }).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        return response;
      }),
      catchError((error) => {
        console.error('Error en el login:', error);
        return of(null);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
