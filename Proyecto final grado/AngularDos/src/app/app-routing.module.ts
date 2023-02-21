import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { OlvidarPassComponent } from './pages/olvidar-pass/olvidar-pass.component';
import { VerificarComponent } from './pages/verificar/verificar.component';

const routes: Routes = [{path: 'home', component: HomeComponent},
{path: 'registro', component: RegistroComponent},
{path: 'login', component: LoginComponent},
{path: 'olvidarpass', component: OlvidarPassComponent},
{path: 'verificar', component: VerificarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
