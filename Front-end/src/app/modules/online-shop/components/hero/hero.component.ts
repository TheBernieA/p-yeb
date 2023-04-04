import { Component, OnInit } from '@angular/core';

const IMAGES = [
  { path: "assets/images/shop/pc/macbook.png" },
  { path: "assets/images/shop/pc/macbookpro.jpg" },
  { path: "assets/images/shop/pc/macbook.png" },
  { path: "assets/images/shop/pc/macbook.png" },
]

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})


export class HeroComponent implements OnInit {
  image = IMAGES
  selectedImage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.selectedImage = this.image[0].path
  }

  onImageSelect(path: string) {
    this.selectedImage = path
  }

}
