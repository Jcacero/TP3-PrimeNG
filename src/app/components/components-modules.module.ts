import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//componentes
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { PrimeNGModulesModule } from '../prime-ngmodules/prime-ngmodules.module';
import { ParallaxComponent } from './parallax/parallax.component';
import { CardComponent } from './card/card.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    BarraMenuComponent,
    ParallaxComponent,
    CardComponent,
    AdminComponent,
    CarouselComponent,
  ],
  exports: [
    BarraMenuComponent,
    ParallaxComponent,
    CardComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimeNGModulesModule,
  ]
})
export class ComponentsModulesModule { }
