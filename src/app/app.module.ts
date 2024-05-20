import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { SharedModule } from './modules/shared/shared.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeadComponent } from './layout/head/head.component';
import { CarouselComponent } from './layout/head/carousel/carousel.component';
import { ServiciosComponent } from './layout/servicios/servicios.component';
import { SobreNosotrosComponent } from './layout/sobre-nosotros/sobre-nosotros.component';
import { LineasComponent } from './layout/lineas/lineas.component';
import { CardComponent } from './layout/sobre-nosotros/card/card.component';
import { CardEditComponent } from './layout/sobre-nosotros/card-edit/card-edit.component';
import { IniciarSesionComponent } from './layout/iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './layout/iniciar-sesion/login/login.component';
import { FooterComponent } from './layout/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../enviroment/enviroment.local';
import { CarouselEditComponent } from './layout/head/carousel-edit/carousel-edit.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeadComponent,
    CarouselComponent,
    ServiciosComponent,
    SobreNosotrosComponent,
    LineasComponent,
    CardComponent,
    IniciarSesionComponent,
    LoginComponent,
    FooterComponent,
    CardEditComponent,
    CarouselEditComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
