import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//componentes
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { PrimeNGModulesModule } from '../prime-ngmodules/prime-ngmodules.module';
import { ParallaxComponent } from './parallax/parallax.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

@NgModule({
  declarations: [
    BarraMenuComponent,
    ParallaxComponent,
    CarrouselComponent,
  ],
  exports: [
    BarraMenuComponent,
    ParallaxComponent,
    CarrouselComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimeNGModulesModule,
  ]
})
export class ComponentsModulesModule { }
