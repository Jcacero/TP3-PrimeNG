import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import PrimeNG modules
import {MegaMenuModule} from 'primeng/megamenu';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
    CardModule,
    ButtonModule
  ]
})
export class PrimeNGModulesModule { }
