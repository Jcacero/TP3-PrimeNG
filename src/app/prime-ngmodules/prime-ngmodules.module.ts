import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import PrimeNG modules
import {MegaMenuModule} from 'primeng/megamenu';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
<<<<<<< HEAD
import {CardModule} from 'primeng/card';
=======
import {GalleriaModule} from 'primeng/galleria';

>>>>>>> bbacc10229e737459c354c430849e68b6247bf66



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
<<<<<<< HEAD
    CardModule
=======
    GalleriaModule
>>>>>>> bbacc10229e737459c354c430849e68b6247bf66
  ],
  exports: [
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
<<<<<<< HEAD
    CardModule
=======
    GalleriaModule
>>>>>>> bbacc10229e737459c354c430849e68b6247bf66
  ]
})
export class PrimeNGModulesModule { }
