import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cafe';
  isLightMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    console.log("🔍 Tema guardado en localStorage:", savedTheme);

    if (savedTheme === 'light') {
      this.isLightMode = true;
      this.renderer.addClass(document.body, 'light-mode');
      console.log("✅ Modo claro activado desde localStorage.");
    }

    // Verificar si la clase realmente se aplicó
    setTimeout(() => {
      console.log("📌 Clases actuales en body:", document.body.classList.toString());
      console.log("🎨 Color de fondo actual:", window.getComputedStyle(document.body).backgroundColor);
    }, 500);
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    console.log("🎛️ Cambiando tema. Estado actual de isLightMode:", this.isLightMode);
  
    if (this.isLightMode) {
      this.renderer.addClass(document.body, 'light-mode');
      localStorage.setItem('theme', 'light');
      console.log("🌞 Modo claro activado y guardado en localStorage.");
    } else {
      this.renderer.removeClass(document.body, 'light-mode');
      localStorage.setItem('theme', 'dark');
      console.log("🌑 Modo oscuro activado y guardado en localStorage.");
    }
  
    // Verificar si la clase realmente se aplicó
    setTimeout(() => {
      console.log("📌 Clases actuales en body después del cambio:", document.body.classList.toString());
      console.log("🎨 Color de fondo actual después del cambio:", window.getComputedStyle(document.body).backgroundColor);
    }, 500);
  }
  
}
