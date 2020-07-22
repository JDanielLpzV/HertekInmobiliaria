import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { ForgotPasswordComponent } from './components/forms/forgot-password/forgot-password.component';
import { StoreRegisterComponent } from './components/forms/store-register/store-register.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TerrenosComponent } from './components/pages/terrenos/terrenos.component';
import { CasasComponent } from './components/pages/casas/casas.component';
import { ListCasasComponent } from './components/list-casas/list-casas.component';
import { ListTerrenosComponent } from './components/list-terrenos/list-terrenos.component';
import { DetailTerrenosComponent } from './components/pages/detail-terrenos/detail-terrenos.component';
import { DetailCasasComponent } from './components/pages/detail-casas/detail-casas.component';
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
    path: 'casas',
    component: CasasComponent
  },
  // {
  //   path: 'confirmacion',
  //   component: SendEmailComponent
  // },
  {
    path: 'recuperar-contrasena',
    component: ForgotPasswordComponent
  },
  {
    path: 'registrar-localito',
    component: StoreRegisterComponent
  },
  {
    path: 'casa/:idcasa',
    component: DetailCasasComponent
  },
  {
    path: 'admin/casas',
    component: ListCasasComponent
  },
  {
    path: 'admin/terrenos',
    component: ListTerrenosComponent
  },
  {
    path: 'terrenos/:idTerreno',
    component: DetailTerrenosComponent
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
