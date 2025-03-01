import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component'; // Página principal para cada rol
import { NavbarComponent } from './components/navbar/navbar.component'; // Ejemplo de otra página

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'admin', component: HomeComponent }, // Cambia esto por el componente del administrador
  { path: 'garzon', component: HomeComponent }, // Cambia por el componente del garzón
  { path: 'cocina', component: HomeComponent }, // Cambia por el componente de cocina
  { path: '**', redirectTo: '/inicio' }, // Ruta por defecto para páginas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
