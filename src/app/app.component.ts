import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafe';

  toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
  
    // Cambiar icono según el modo
    const btn = document.querySelector('.theme-toggle-btn i');
    if (body.classList.contains('light-mode')) {
      btn?.classList.replace('bi-moon', 'bi-sun'); // Icono de sol
    } else {
      btn?.classList.replace('bi-sun', 'bi-moon'); // Icono de luna
    }
  }
  
}
