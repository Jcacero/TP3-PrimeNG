import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

//componentes
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { PrimeNGModulesModule } from '../prime-ngmodules/prime-ngmodules.module';
import { ParallaxComponent } from './parallax/parallax.component';
<<<<<<< HEAD
import { CardComponent } from './card/card.component';
=======
import { CarrouselComponent } from './carrousel/carrousel.component';
>>>>>>> bbacc10229e737459c354c430849e68b6247bf66

@NgModule({
  declarations: [
    BarraMenuComponent,
    ParallaxComponent,
<<<<<<< HEAD
    CardComponent,
=======
    CarrouselComponent,
>>>>>>> bbacc10229e737459c354c430849e68b6247bf66
  ],
  exports: [
    BarraMenuComponent,
    ParallaxComponent,
<<<<<<< HEAD
    CardComponent
=======
    CarrouselComponent,
>>>>>>> bbacc10229e737459c354c430849e68b6247bf66
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimeNGModulesModule,
  ]
})
export class ComponentsModulesModule { }
