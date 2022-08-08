import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/servicios/photo.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  images: any[];

    responsiveOptions:any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getImages().then(images =>{ 
      this.images = images
  }

}
