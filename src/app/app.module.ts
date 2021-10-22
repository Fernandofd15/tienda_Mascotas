import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavmenuComponent } from './componentes/navmenu/navmenu.component';
import { PagenotfoundComponent } from './componentes/pagenotfound/pagenotfound.component';
import { AnimalitosComponent } from './componentes/animalitos/animalitos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { TiendasComponent } from './componetes/tiendas/tiendas.component';
import { ComprasComponent } from './componentes/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavmenuComponent,
    PagenotfoundComponent,
    AnimalitosComponent,
    UsuariosComponent,
    TiendasComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
