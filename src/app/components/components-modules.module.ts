import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { PrimeNGModulesModule } from '../prime-ngmodules/prime-ngmodules.module';


@NgModule({
  declarations: [
    BarraMenuComponent
  ],
  exports: [
    BarraMenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModulesModule
  ]
})
export class ComponentsModulesModule { }
