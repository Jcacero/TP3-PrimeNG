import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModulesModule } from './components/components-modules.module';
import { PrimeNGModulesModule } from './prime-ngmodules/prime-ngmodules.module';


import { AppComponent }   from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModulesModule,
    PrimeNGModulesModule
  ],
  declarations: [ AppComponent, NavbarComponent, FooterComponent, HeaderComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
