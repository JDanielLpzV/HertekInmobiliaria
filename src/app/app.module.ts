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
import { StoreRegisterComponent } from './components/forms/store-register/store-register.component';
import { ProductRegisterComponent } from './components/forms/product-register/product-register.component';
import { NewOfferComponent } from './components/forms/new-offer/new-offer.component';
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
import { ListTerrenosComponent } from './components/list-terrenos/list-terrenos.component';
import { ListCasasComponent } from './components/list-casas/list-casas.component';
import { DetailCasasComponent } from './components/pages/detail-casas/detail-casas.component';
import { DetailTerrenosComponent } from './components/pages/detail-terrenos/detail-terrenos.component';
import { ModalterrenosComponent } from './components/modalterrenos/modalterrenos.component';
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
    StoreRegisterComponent,
    ProductRegisterComponent,
    NewOfferComponent,
    ProfileComponent,
    Page404Component,
    SendEmailComponent,
    ModalComponent,
    ContactComponent,
    TerrenosComponent,
    CasasComponent,
    ListTerrenosComponent,
    ListCasasComponent,
    DetailCasasComponent,
    DetailTerrenosComponent,
    ModalterrenosComponent
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
