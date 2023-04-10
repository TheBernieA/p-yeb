import { Component, OnInit } from '@angular/core';

const CAROUSEL_IMAGES = [
  {
    id: 3,
    name: 'Fcar ABS + Transmission',
    image: "assets/images/shop/automobile/abs+trans.jpg",
    description: 'FCAR F508R-E Diagnostic Tool Full System for Engine Transmission ABS SRS with Oil/EPB/SAS/TPMS/Throttle Body Reset Auto Scanner',
    ariaCurrent: 'true',
    ariaLabel: 'Slide 1',
    slideTo: '0',
    slideInterval: '10000',
    active:'active'
  },
  {
    id: 4,
    name: 'Ancel X-HD',
    image: "assets/images/shop/automobile/dfgd.jpg",
    description: 'Full System TabScan Diagnostic Tool',
    ariaCurrent: '',
    ariaLabel: 'Slide 2',
    slideTo: '1',
    slideInterval: '2000'
  },
  {
    id: 5,
    name: 'Tabscan Diagnostic Tool',
    image: "assets/images/shop/automobile/dgdfg.jpg",
    description: 'Full System TabScan Diagnostic Tool',
    ariaCurrent: 'true',
    ariaLabel: 'Slide 3',
    slideTo: '2',
    slideInterval: ''
  },
]

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})


export class HeroComponent implements OnInit {
  images = CAROUSEL_IMAGES
  selectedImage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.selectedImage = this.images[0].image
  }

  onImageSelect(path: string) {
    this.selectedImage = path
  }

}
