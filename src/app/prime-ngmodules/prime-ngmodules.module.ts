import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import PrimeNG modules

import {MegaMenuModule} from 'primeng/megamenu';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MegaMenuModule,
    TabViewModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule
  ]
})
export class PrimeNGModulesModule { }
