import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  peliculas: any [] =[
    {
      name: 'TITLE 1',
      img: 'assets/img2.jpg',
      desc: 'Fue popularizado en los 60s con la creación de las hojas' +
            'las cuales contenian pasajes de Lorem Ipsum, y más recientemente'+
            'con software de autoedición, como por ejemplo Aldus PageMaker,'+ 
            'el cual incluye versiones de Lorem Ipsum'
    
    },
    {
      name: 'TITLE ',
      img: 'assets/img3.jpg',
      desc: 'Fue popularizado en los 60s con la creación de las hojas' +
      'las cuales contenian pasajes de Lorem Ipsum, y más recientemente'+
      'con software de autoedición, como por '
    },
    {
      name: 'TITLE 3',
      img: 'assets/img2.jpg',
      desc: 'Fue popularizado en los 60s con la creación de las hojas' +
      'las cuales contenian pasajes de Lorem Ipsum, y más recientemente'+
      'con software de autoedición, como por ejemplo Aldus PageMaker,'+ 
      'el cual incluye versiones de Lorem Ipsum por ejemplo Aldus PageMaker,'+ 
      'el cual incluye versiones de Lorem Ipsum'
    }
  ];


  constructor(private _config : NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
   }

  
  ngOnInit(): void {
  }

}
