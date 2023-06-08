import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotoneraComponent } from './pages/botonera/botonera.component';
import { CardsComponent } from './pages/cards/cards.component';
import { LoginComponent } from './pages/login/login.component';
import { TemplateComponent } from './pages/template/template.component';
import { TemplateHeaderComponent } from './pages/template/template-header/template-header.component';
import { TemplateSidenavComponent } from './pages/template/template-sidenav/template-sidenav.component';
import { TemplateFooterComponent } from './pages/template/template-footer/template-footer.component';
import { ProductoListComponent } from './pages/mantenimiento/producto/producto-list/producto-list.component';
import { ProductoRegistroComponent } from './pages/mantenimiento/producto/producto-registro/producto-registro.component';
import { CategoriaListComponent } from './pages/mantenimiento/categoria/categoria-list/categoria-list.component';
import { CategoriaRegistroComponent } from './pages/mantenimiento/categoria/categoria-registro/categoria-registro.component';
import { TipoDocumentoListaComponent } from './pages/mantenimiento/tipo-documento/tipo-documento-lista/tipo-documento-lista.component';
import { TipoDocumentoRegistroComponent } from './pages/mantenimiento/tipo-documento/tipo-documento-registro/tipo-documento-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    BotoneraComponent,
    CardsComponent,
    LoginComponent,
    TemplateComponent,
    TemplateHeaderComponent,
    TemplateSidenavComponent,
    TemplateFooterComponent,
    ProductoListComponent,
    ProductoRegistroComponent,
    CategoriaListComponent,
    CategoriaRegistroComponent,
    TipoDocumentoListaComponent,
    TipoDocumentoRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //nos permite trabajar en base a formularios
    ReactiveFormsModule,  // nos permite trabajar con formularios reactivos
    HttpClientModule // nos permite realizar comunicacion por medio del protocolo HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
