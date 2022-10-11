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
import { FormularioComponent } from './formulario/formulario.component';
import { AutocompletarComponent } from './autocompletar/autocompletar.component';

@NgModule({
  declarations: [
    BarraMenuComponent,
    ParallaxComponent,
    CardComponent,
    AdminComponent,
    CarouselComponent,
    FormularioComponent,
    AutocompletarComponent,
  ],
  exports: [
    BarraMenuComponent,
    ParallaxComponent,
    CardComponent,
    CarouselComponent,
    AutocompletarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    PrimeNGModulesModule,
  ]
})
export class ComponentsModulesModule { }
