import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/pages/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { MainComponent } from './components/pages/main/main.component';
import { LoginComponent } from './components/forms/login/login.component';
import { ClientRegisterComponent } from './components/forms/client-register/client-register.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { Page404Component } from './components/pages/page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalComponent } from './components/modal/modal.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { TerrenosComponent } from './components/pages/terrenos/terrenos.component';
import { CasasComponent } from './components/pages/casas/casas.component';
import { DetailCasasComponent } from './components/pages/detail-casas/detail-casas.component';
import { DetailTerrenosComponent } from './components/pages/detail-terrenos/detail-terrenos.component';
import { ModalterrenosComponent } from './components/modalterrenos/modalterrenos.component';
import { ListInmueblesComponent } from './components/list-inmuebles/list-inmuebles.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterListPipe } from './pipes/filter-list.pipe';
import { EdificiosComponent } from './components/pages/edificios/edificios.component';
import { DepartamentosComponent } from './components/pages/departamentos/departamentos.component';
import { ModaledificiosComponent } from './components/modaledificios/modaledificios.component';
import { ModaldepartamentosComponent } from './components/modaldepartamentos/modaldepartamentos.component';
import { DetailDepartamentosComponent } from './components/pages/detail-departamentos/detail-departamentos.component';
import { DetailEdificiosComponent } from './components/pages/detail-edificios/detail-edificios.component';
import { FilterListTPipe } from './pipes/filter-list-t.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    AboutUsComponent,
    MainComponent,
    LoginComponent,
    ClientRegisterComponent,
    ProfileComponent,
    Page404Component,
    SendEmailComponent,
    ModalComponent,
    ContactComponent,
    TerrenosComponent,
    CasasComponent,
    DetailCasasComponent,
    DetailTerrenosComponent,
    ModalterrenosComponent,
    ListInmueblesComponent,
    FilterPipe,
    FilterListPipe,
    EdificiosComponent,
    DepartamentosComponent,
    ModaledificiosComponent,
    ModaldepartamentosComponent,
    DetailDepartamentosComponent,
    DetailEdificiosComponent,
    FilterListTPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
