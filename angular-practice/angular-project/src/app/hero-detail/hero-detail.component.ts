import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  
  hero: Hero;
  onSelect(z: Hero): void {
    this.hero = z;
  }

  constructor() { }

  ngOnInit() { }
}
