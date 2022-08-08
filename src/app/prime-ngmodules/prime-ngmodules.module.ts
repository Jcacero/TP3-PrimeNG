import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import PrimeNG modules
import {MegaMenuModule} from 'primeng/megamenu';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
    GalleriaModule
  ],
  exports: [
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
    GalleriaModule
  ]
})
export class PrimeNGModulesModule { }
