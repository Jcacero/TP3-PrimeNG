import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import PrimeNG modules
import {MegaMenuModule} from 'primeng/megamenu';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
    CardModule
  ],
  exports: [
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
    CardModule
  ]
})
export class PrimeNGModulesModule { }
