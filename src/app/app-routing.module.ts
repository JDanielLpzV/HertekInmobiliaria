import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ForgotPasswordComponent } from './components/forms/forgot-password/forgot-password.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TerrenosComponent } from './components/pages/terrenos/terrenos.component';
import { CasasComponent } from './components/pages/casas/casas.component';
import { DetailTerrenosComponent } from './components/pages/detail-terrenos/detail-terrenos.component';
import { DetailCasasComponent } from './components/pages/detail-casas/detail-casas.component';
import { ListInmueblesComponent } from './components/list-inmuebles/list-inmuebles.component';
import { DepartamentosComponent } from './components/pages/departamentos/departamentos.component';
import { EdificiosComponent } from './components/pages/edificios/edificios.component';
import { DetailDepartamentosComponent } from './components/pages/detail-departamentos/detail-departamentos.component';
import { DetailEdificiosComponent } from './components/pages/detail-edificios/detail-edificios.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: ClientRegisterComponent
  },
  {
    path: 'sobre-nosotros',
    component: AboutUsComponent
  },
  {
    path: 'terrenos',
    component: TerrenosComponent
  },
  {
    path: 'viviendas',
    component: CasasComponent
  },
  {
    path: 'departamentos',
    component: DepartamentosComponent
  },
  {
    path: 'edificios',
    component: EdificiosComponent
  },
  {
    path: 'recuperar-contrasena',
    component: ForgotPasswordComponent
  },
  {
    path: 'vivienda/:idCasa',
    component: DetailCasasComponent
  },
  {
    path: 'terreno/:idTerreno',
    component: DetailTerrenosComponent
  },
  {
    path: 'departamento/:idDepartamento',
    component: DetailDepartamentosComponent
  },
  {
    path: 'edificio/:idEdificio',
    component: DetailEdificiosComponent
  },
  {
    path: 'admin/inmuebles',
    component: ListInmueblesComponent
  },
  {
    path: 'contacto',
    component: ContactComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
