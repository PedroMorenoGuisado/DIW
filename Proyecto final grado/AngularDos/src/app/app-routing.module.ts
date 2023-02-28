import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { OlvidarPassComponent } from './pages/olvidar-pass/olvidar-pass.component';
import { VerificarComponent } from './pages/verificar/verificar.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { HorarioComponent } from './pages/horario/horario.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { VerificarreservaComponent } from './pages/verificarreserva/verificarreserva.component';

const routes: Routes = [{path: 'home', component: HomeComponent},
{path: 'registro', component: RegistroComponent},
{path: 'login', component: LoginComponent},
{path: 'olvidarpass', component: OlvidarPassComponent},
{path: 'verificar', component: VerificarComponent},
{path: 'reservas', component: ReservasComponent},
{path: 'horario', component: HorarioComponent},
{path: 'contactos', component: ContactosComponent},
{path: 'verificarreserva', component: VerificarreservaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
