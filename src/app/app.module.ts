import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModulesModule } from './components/components-modules.module';
import { PrimeNGModulesModule } from './prime-ngmodules/prime-ngmodules.module';
import { AngularFireModule } from '@angular/fire/compat';

//paginas
import { AppComponent }   from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertaService } from './servicios/alerta.service';
import { UsuariosService } from './servicios/usuarios.service';
import { environment } from 'src/environments/environment';
import { PruebaGuardGuard } from './prueba-guard.guard';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModulesModule,
    AppRoutingModule,
    PrimeNGModulesModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [ AppComponent, NavbarComponent, FooterComponent, HeaderComponent, HomeComponent ],
  providers:[AlertaService,UsuariosService,PruebaGuardGuard],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
