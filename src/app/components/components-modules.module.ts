import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { PrimeNGModulesModule } from '../prime-ngmodules/prime-ngmodules.module';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    BarraMenuComponent,
    ParallaxComponent
  ],
  exports: [
    BarraMenuComponent,
    ParallaxComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModulesModule,
  ]
})
export class ComponentsModulesModule { }
